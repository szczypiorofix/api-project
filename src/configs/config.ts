export interface IEnvironmentType {
    port: number;
    name: string;
}

export interface IEnvironments {
    [key: string]: IEnvironmentType;
}

const curEnv = process.env.NODE_ENV ?? 'development';

const environments: IEnvironments = {
    "dev": {
        port: 3000,
        name: "development"
    },
    "production": {
        port: 80,
        name: "production"
    }
};

const currentEnvironment: IEnvironmentType = typeof (environments[curEnv]) === 'object' ? environments[curEnv] : environments.dev;

export default currentEnvironment;
