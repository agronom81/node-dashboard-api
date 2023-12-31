import { inject, injectable } from 'inversify';
import { IConfigService } from './config.service.interface';
import { DotenvConfigOutput, DotenvParseOutput, config } from 'dotenv';
import { TYPES } from '../types';
import { ILogger } from '../logger/logger.interface';

@injectable()
export class ConfigService implements IConfigService {
    config!: DotenvParseOutput;
    constructor(@inject(TYPES.ILogger) private logger: ILogger) {
        const result: DotenvConfigOutput = config();
        if (result.error) {
            this.logger.error('Error when read .env or it is missing');
        } else {
            this.config = result.parsed as DotenvParseOutput;
        }
    }

    get(key: string): string {
        return this.config[key];
    }
}
