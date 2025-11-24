import { EntityType } from './types';

export const GAME_CONFIG = {
  INITIAL_SPAWN_RATE: 1500, // ms
  MIN_SPAWN_RATE: 400, // ms
  DIFFICULTY_RAMP: 0.98, // Multiplier per spawn
  BAT_LAG: 0.15, // Lerp factor (lower is laggier)
  COMBO_WINDOW: 2000, // ms
  COMBO_THRESHOLD: 3,
  
  // Scoring
  SCORE_MOSQUITO: 1,
  SCORE_BOSS: 5,
  SCORE_COMBO_BONUS: 3,
};

export const ENTITY_CONFIG: Record<EntityType, {
  speed: number;
  radius: number;
  color: string; // Fallback or particle color
  emoji: string;
  isDangerous: boolean;
  score: number;
}> = {
  [EntityType.MOSQUITO]: {
    speed: 3,
    radius: 20,
    color: '#8B0000',
    emoji: '🦟',
    isDangerous: false,
    score: 1,
  },
  [EntityType.BOSS]: {
    speed: 5, // Faster
    radius: 35, // Larger
    color: '#FF0000',
    emoji: '🕷️', // Using spider/large bug emoji for boss visual
    isDangerous: false,
    score: 5,
  },
  [EntityType.BEE]: {
    speed: 2.5,
    radius: 25,
    color: '#FFD700',
    emoji: '🐝',
    isDangerous: true,
    score: 0,
  },
  [EntityType.BUTTERFLY]: {
    speed: 2,
    radius: 25,
    color: '#FF69B4',
    emoji: '🦋',
    isDangerous: true,
    score: 0,
  },
  [EntityType.LADYBUG]: {
    speed: 2.5,
    radius: 20,
    color: '#FF4500',
    emoji: '🐞',
    isDangerous: true,
    score: 0,
  },
};