import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ProjectsModule } from '../projects/projects.module';
import { SkillsModule } from '../skills/skills.module';
import { ExperienceModule } from '../experience/experience.module';

@Module({
  imports: [ProjectsModule, SkillsModule, ExperienceModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule { }
