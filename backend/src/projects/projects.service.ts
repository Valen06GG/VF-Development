import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/projects.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async findAll(): Promise<Project[]> {
    return this.projectRepository.find({
      order: { id: 'DESC' },
    });
  }

  async create(data: Partial<Project>): Promise<Project> {
    const newProject = this.projectRepository.create(data);
    return this.projectRepository.save(newProject);
  }

  async delete(id: number): Promise<void> {
    await this.projectRepository.delete(id);
  }
}