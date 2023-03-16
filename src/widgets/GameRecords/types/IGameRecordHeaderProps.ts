interface IGameRecordHeaderProps {
  activeName: 'easy' | 'normal' | 'hard';
  changeName: (value: 'easy' | 'normal' | 'hard') => void
}

export type { IGameRecordHeaderProps };
