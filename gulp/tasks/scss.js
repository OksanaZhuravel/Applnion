import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import groupCssMediaQueries from 'gulp-group-css-media-queries'
import rename from 'gulp-rename'
import gulpSass from 'gulp-sass'
import webpcss from 'gulp-webp'
import * as dartSass from 'sass'

const sass = gulpSass(dartSass)

export const scss = () => {
	return app.gulp
		.src(app.path.src.scss, { sourcemaps: app.isDev })
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'SCSS',
					message: 'Error: <%= error.message %>',
				})
			)
		)
		.pipe(app.plugins.replace(/@img\//g, '../img/'))
		.pipe(
			sass({
				outputStyle: 'expanded',
			})
		)

		.pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
		.pipe(
			app.plugins.if(
				app.isBuild,
				webpcss({ webpClass: '.webp', noWebpClass: '.no-webp' })
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				autoprefixer({
					overrideBrowserslist: ['last 3 versions'],
					grid: true,
					cascade: true,
				})
			)
		)

		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.if(app.isBuild, cleanCSS()))
		.pipe(
			rename({
				extname: '.min.css',
			})
		)
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream())
}
