// function to create the course programs Model

const courprogModel = (sequelize, dataTypes) => {
    const courprog = sequelize.define('courprog', {
        courprog_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
    });
    return courprog;
};
//export the course program table to be used elsewhre in the program
export default courprogModel;