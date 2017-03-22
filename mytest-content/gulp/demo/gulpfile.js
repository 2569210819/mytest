var gulp=require("gulp");
var minifycss=require("gulp-minify-css");
var rename=require("gulp-rename");
var connect=require("gulp-connect");



gulp.task('minifycss',function(){
	gulp.src('index.css')
	     .pipe(minifycss())
	     .pipe(rename("index.mini.css"))
	     .pipe(gulp.dest("src/"))
	     .pipe(connect.reload())
})

gulp.task('html',function(){
	 gulp.src('index.html')
	    .pipe(connect.reload())
})
gulp.task("server",function(){
	connect.server({
		livereload:true
	})
})
gulp.task('watch',function(){
	gulp.watch(['index.html'],['html'])
	gulp.watch('index.css',['minifycss'])
})
gulp.task('default',['server','watch'])
