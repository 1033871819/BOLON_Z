var gulp = require("gulp");
var sass = require("gulp-sass");
gulp.task("copy", function() {
	return gulp.src("./**/*")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\BOLON111"));
});

gulp.task("watch", async() => {
	gulp.watch("js/**/*", async() => {
		gulp.src("js/**/*")
			.pipe(gulp.dest("D:\\phpStudy\\WWW\\BOLON111\\js"));

	})
	gulp.watch("*html", async() => {
		gulp.src("*html")
			.pipe(gulp.dest("D:\\phpStudy\\WWW\\BOLON111"));

	})
	//	gulp.watch("sass/**/*",async()=>{
	//	.pipe(sass())
	//		gulp.src("sass/**/*")
	//	.pipe(gulp.dest("D:\\phpStudy\\WWW\\BOLON111\\css"));
	//	
	//		
	//	})
	gulp.watch("sass/**/*", async() => {
		gulp.src("sass/**/*")
			.pipe(sass())
			.pipe(gulp.dest("D:\\phpStudy\\WWW\\BOLON111\\css"))
			.pipe(gulp.dest("css"))
	})
})