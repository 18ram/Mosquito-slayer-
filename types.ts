export enum GameState {
  START = 'START',
  PLAYING = 'PLAYING',
  GAME_OVER = 'GAME_OVER',
}

export enum EntityType {
  MOSQUITO = 'MOSQUITO',
  BOSS = 'BOSS',
  BEE = 'BEE',
  BUTTERFLY = 'BUTTERFLY',
  LADYBUG = 'LADYBUG',
}

export interface Vector2 {
  x: number;
  y: number;
}

export interface Entity {
  id: string;
  type: EntityType;
  position: Vector2;
  velocity: Vector2;
  radius: number;
  rotation: number;
  points: number;
  isDead: boolean;
  spawnTime: number;
  oscillationOffset: number; // For wavy movement
}

export interface Particle {
  id: string;
  position: Vector2;
  velocity: Vector2;
  life: number; // 0 to 1
  color: string;
  size: number;
}

export interface FloatingText {
  id: string;
  text: string;
  position: Vector2;
  life: number;
  color: string;
}

export interface HighScore {
  score: number;
  date: string;
}