import { Injectable } from '@nestjs/common';

import { AppDto } from '../models/app.dto';

@Injectable()
export class AppService {

  getHello(): AppDto {

    return  { success: true, message: 'Books Stores Web API in NestJS.' };
  }

}
