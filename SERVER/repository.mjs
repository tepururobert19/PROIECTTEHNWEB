/*import Sequelize from 'sequelize';

const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: './repository.db',
	define: {
		timestamps: false
	}
});

const Activity = sequelize.define('activity', {
	coda: {
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV4,
		allowNull: false,
		primaryKey: true
	},
	activityName: {
		type: Sequelize.STRING,
		allowNull: false
	},
    activityDescr: {
		type: Sequelize.STRING,
		allowNull: false
	},
    prof: {
        type: Sequelize.STRING
    }
});

const Student = sequelize.define('student', {
	ids: {
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV4,
		allowNull: false,
		primaryKey: true
	},
	firstName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false
	},
    group: {
		type: Sequelize.STRING,
		allowNull: false
	}	
});

const Professor = sequelize.define('professor', {
	idp: {
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV4,
		allowNull: false,
		primaryKey: true
	},
	firstName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

Activity.hasMany(Professor, {foreignKey: 'activityCode'});
Professor.belongsTo(Activity, {foreignKey: 'activityCode'});

Student.hasMany(Activity, {foreignKey: 'studentId'});
Activity.belongsTo(Student, {foreignKey: 'studentId'});

Professor.belongsToMany(Activity, {through:"enrollments"});
Activity.belongsToMany(Professor, {through:"enrollments"});

async function initialize() {
	await sequelize.authenticate();
	await sequelize.sync({alter: true});
}

export {
	initialize,
	Activity, Student, Professor
}*/