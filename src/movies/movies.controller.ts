import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(): string {
    return 'this will return all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `we are searching for a movie made after: ${searchingYear}`;
  }

  @Get(':id/:idtwo')
  getOneMovie(
    @Param('id') MovieID: string,
    @Param('idtwo') two: string,
  ): string {
    return `this will return one movie with the id: ${MovieID} ${two}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete(':id')
  remove(@Param('id') movieID: string): string {
    return `This will delete a movie with the id: ${movieID}`;
  }

  @Patch(':id')
  patch(@Param('id') movieID: string, @Body() updateData) {
    return {
      id: movieID,
      ...updateData,
    };
  }
}
