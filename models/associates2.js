import { courses, programs, courprog } from '../database/sequelize.js'

const associations = () => {
  programs.belongsToMany(courses, { through: { model: courprog, unique: false}});
  courses.belongsToMany(programs, { through: { model: courprog, unique: false}});
}

export default associations;
