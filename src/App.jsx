import  { useState } from 'react';
import EmojiList from './EmojiList';
import emojiData from './emojis.json'; // JSON dosyası yolu
import emojiDataBaslik from './baslikemoji.json'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredEmojis = emojiData.filter((emoji) =>
    emoji.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const solEmoji = emojiDataBaslik[1].emoji;
  const sagEmoji = emojiDataBaslik[0].emoji;


  return (
    <div className="m-5">
      <div className="text-center">
        <h1 className="text-4xl mb-4">{solEmoji}Emoji Arama Motoru{sagEmoji}</h1>
        <input
          type="text"
          placeholder="Emoji ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="p-4">
        <EmojiList emojis={filteredEmojis} />
      </div>
    </div>
  );
}

export default App;
