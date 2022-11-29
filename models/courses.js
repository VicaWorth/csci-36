// creates the model for the course table 
const courseModel = (sequelize, dataTypes) => {
  const courses = sequelize.define('courses', {
      cour_id: {
          type: dataTypes.STRING(10),
          primaryKey: true,
      },
      cour_name: {
          type: dataTypes.STRING(250),
          allowNull: false
      },
      cour_desc: {
          type: dataTypes.TEXT('long'),
          allowNull: true
      }
  });
  
  return courses;
};

//exports the model to be used elsewhere in the program
export { courseModel };