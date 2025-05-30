// import webp from 'gulp-webp';
// import imagemin from 'gulp-imagemin';

// export const images = () => {
//   return (
//     app.gulp
//       .src(app.path.src.images)
//       .pipe(
//         app.plugins.plumber(
//           app.plugins.notify.onError({
//             title: 'IMAGES',
//             message: 'Error: <%= error.message %>',
//           })
//         )
//       )
//       .pipe(app.plugins.newer(app.path.build.images))
//       .pipe(webp())
//       // .pipe(app.plugins.if(app.isBuild, webp()))
//       .pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.images)))
//       .pipe(app.plugins.if(app.isBuild, app.gulp.src(app.path.src.images)))
//       .pipe(
//         app.plugins.if(app.isBuild, app.plugins.newer(app.path.build.images))
//       )
//       .pipe(
//         imagemin({
//           progressive: true,
//           interlaced: true,
//           svgoPlugins: [{ removeViewBox: false }],
//           optimizationLevel: 3,
//         })
//       )
//       .pipe(app.gulp.dest(app.path.build.images))
//       .pipe(app.gulp.src(app.path.src.svg))
//       .pipe(app.gulp.dest(app.path.build.images))
//       .pipe(app.plugins.browsersync.stream())
//   );
// };
import gulpIf from 'gulp-if'
import webp from 'gulp-webp'

export const images = () => {
	return app.gulp
		.src(app.path.src.images) // путь к исходным изображениям
		.pipe(
			gulpIf(
				app.isBuild,
				webp({
					quality: 85, // качество webp, можно изменить
				})
			)
		)
		.pipe(app.gulp.dest(app.path.build.images)) // путь для сохранения webp
}
