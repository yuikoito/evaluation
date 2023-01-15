import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { SlackQueryDto } from './dto/SlackQuery.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  receiveSlackRequest(@Body() slackQueryDto: SlackQueryDto): any {
    const commandType = slackQueryDto.text.trim().split(' ')[0];
    switch (commandType) {
      case 'login':
        return this.appService.login();
      default:
        return this.appService.help();
    }
  }
}
