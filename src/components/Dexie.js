import Dexie from 'dexie';

export const db = new Dexie('myDiaryApp');
db.version(1).stores({
    note: "++id,title,content",
});

