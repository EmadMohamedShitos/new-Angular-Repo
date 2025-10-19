import { Routes } from '@angular/router';
import { DockerBasic } from './docker-basic/docker-basic';
import { DockerCommands } from './docker-commands/docker-commands';
import { DockerCompose } from './docker-compose/docker-compose';
import { DockerNetwork } from './docker-network/docker-network';
import { DockerVolume } from './docker-volume/docker-volume';
import { DockerFile } from './docker-file/docker-file';
import { UnderstandDocker } from './understand-docker/understand-docker';
import { DockerInstallation } from './docker-installation/docker-installation';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'understand-docker' },
  { path: 'docker-basic', component: DockerBasic },
  { path: 'docker-installation', component: DockerInstallation },
  { path: 'docker-commands', component: DockerCommands },
  { path: 'docker-compose', component: DockerCompose },
  { path: 'docker-network', component: DockerNetwork },
  { path: 'docker-volume', component: DockerVolume },
  { path: 'docker-file', component: DockerFile },
  { path: 'understand-docker', component: UnderstandDocker },
  { path: '**', redirectTo: 'understand-docker' }
];
