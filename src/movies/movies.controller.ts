import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(): string {
    return 'this will return all movies';
  }

  @Get('/:id/:idtwo')
  getOneMovie(
    @Param('id') MovieID: string,
    @Param('idtwo') two: string,
  ): string {
    return `this will return one movie with the id: ${MovieID} ${two}`;
  }

  @Post()
  create(): string {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieID: string): string {
    return `This will delete a movie with the id: ${movieID}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieID: string): string {
    return `This will patch a movie with the id: ${movieID}`;
  }
}
