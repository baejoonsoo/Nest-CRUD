import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
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
  getOneMovie(@Param('id') MovieID: number): Movie {
    return this.movieService.getOne(MovieID);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.movieService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieID: number): void {
    return this.movieService.deleteOne(movieID);
  }

  @Patch(':id')
  patch(@Param('id') movieID: number, @Body() updateData: UpdateMovieDto) {
    return this.movieService.update(movieID, updateData);
  }
}
