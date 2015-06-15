module.exports = function(grunt) {
  
//  grunt.initConfig({
//    
//  });
  
  grunt.loadNpmTasks("grunt-contrib-less");
  
  grunt.initConfog({
    less: {
      style: {
        files: {
          css/style.css": ["css/style.less"]
        }
      }
    }
  });
};