import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }

  @Get(':id')
  getOneMovie(@Param('id') MovieID: string): Movie {
    return this.movieService.getOne(MovieID);
  }

  @Post()
  create(@Body() movieData) {
    return this.movieService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieID: string): void {
    return this.movieService.deleteOne(movieID);
  }

  @Patch(':id')
  patch(@Param('id') movieID: string, @Body() updateData) {
    return this.movieService.update(movieID, updateData);
  }
}
