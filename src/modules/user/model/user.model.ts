import {
    DataTypes,
    Model,
    Optional,
    Sequelize,
} from 'sequelize';

interface IUserAttribute {
    id?: number;
    firstname: string;
    lastname: string;
    gender: string;
    email: string;
    createdAt?: string;
    updatedAt?: string;
}

interface IUserCreationAttribute extends Optional<IUserAttribute, 'id'> {
}

export class User extends Model<IUserAttribute, IUserCreationAttribute> implements IUserAttribute {
    id?: number;
    email!: string;
    firstname!: string;
    gender!: string;
    lastname!: string;

    readonly createdAt?: string;
    readonly updatedAt?: string;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
    },
    firstname: {
        type: DataTypes.STRING,
    },
    lastname: {
        type: DataTypes.STRING,
    },
    gender: {
        type: DataTypes.ENUM('male', 'female'),
    },
}, {
    tableName: 'users',
    sequelize: new Sequelize('mysql://root:P@ssw0rd@localhost:3306/acme', { logging: false }),
    createdAt: true,
    updatedAt: true,
    freezeTableName: true,
    underscored: true,
});
