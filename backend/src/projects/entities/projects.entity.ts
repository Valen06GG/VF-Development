import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text', name: 'image_url' })
  imageUrl: string;

  @Column({ type: 'text', array: true, default: '{}' })
  tags: string[];

  @Column({ type: 'text', nullable: true, name: 'live_url' })
  liveUrl?: string;

  @Column({ type: 'text', nullable: true, name: 'github_url' })
  githubUrl?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}