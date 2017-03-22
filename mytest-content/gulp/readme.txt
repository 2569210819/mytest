一、准备工作
	全局安装gulp
	npm install gulp -g
	
	建立项目 到项目目录下创建 package.json  (npm init)
	
	在项目目录下本地安装gulp (npm install gulp --save-dev)
	
	创建任务文件 gulpfile.js
	
二、基础

	简单任务
	gulp.task("hello",function(){
		console.log("hello");
	})
	
	拷贝文件
	gulp.task("copy-index",function(){
		return gulp.src("").pipe(gulp.dest(""));
	});
	
	拷贝图片
	gulp.task("copy-image",function(){
		return gulp.src("images/**/*")
			.pipe(gulp.dest("dist/images"));
	});
	
	多个文件的拷贝（排除某一个文件）
	gulp.task("data",function(){
		return gulp.src(["json/*.json","xml/*.xml","!xml/2.xml"])
			.pipe(gulp.dest("dist/data"));
	});
	
	
	批量任务的处理
	gulp.task("build",["copy-index","copy-image","data"],function(){
		console.log("编译完成！");
	})
	
	监控
	gulp.task("watch",function(){
		gulp.watch("index.html",["copy-index"]);
	})
		
三、插件

	编译less  gulp-less
	项目下安装    npm install gulp-less --save-dev
	
	压缩css gulp-minify-css
	项目下安装    npm install gulp-minify-css --save-dev
	
	重命名	npm install gulp-rename --save-dev
	
	建立服务器	npm install gulp-connect --save-dev
	
	文件连接 	npm install gulp-concat --save-dev

	js压缩	npm install gulp-uglify --save-dev
	
	图片压缩	npm install gulp-imagemin --save-dev
	