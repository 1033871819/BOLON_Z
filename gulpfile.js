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
	
		gulp.watch("css/**/*",async()=>{
			gulp.src("css/**/*")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\BOLON111\\css"));
		
			
		})
	gulp.watch("img/**/*", async() => {
		gulp.src("img/**/*")
			.pipe(gulp.dest("D:\\phpStudy\\WWW\\BOLON111\\img"));

	})
	gulp.watch("img_1/**/*", async() => {
		gulp.src("img_1/**/*")
			.pipe(gulp.dest("D:\\phpStudy\\WWW\\BOLON111\\img_1"));

	})
	gulp.watch("sass/**/*", async() => {
		gulp.src("sass/**/*")
			.pipe(sass())
			.pipe(gulp.dest("D:\\phpStudy\\WWW\\BOLON111\\css"))
			.pipe(gulp.dest("css"))
	})
})