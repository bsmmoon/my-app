import { HistoryEntry } from './historySlice';

export function fetchHistoryEntriesAPI() {
  return new Promise<{ data: HistoryEntry[] }>((resolve) =>
    setTimeout(() => resolve({ data: [
      {
        id: '2',
        description: 'Request leave next Tuesday',
        tags: ['date', 'winni'],
      },
      {
        id: '1',
        description: 'Increase the credit limit',
        tags: ['finance'],
      },
    ] }), 500)
  );
}
