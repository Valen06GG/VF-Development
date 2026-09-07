import { Controller, Get, Post, Body, ParseIntPipe, Param, Delete } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  async getAllProjects() {
    return this.projectsService.findAll();
  }

  @Post()
  async createProject(@Body() body: any) {
    return this.projectsService.create(body);
  }

  @Delete(':id')
  async deleteProject(@Param('id', ParseIntPipe) id: number) {
    await this.projectsService.delete(id);
    return { message: 'Proyecto eliminado con éxito' };
  }
}