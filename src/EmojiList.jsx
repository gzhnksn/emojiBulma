import PropTypes from 'prop-types'; // prop-types kütüphanesini ekleyin

function EmojiList({ emojis }) {

    const copyToClipboard = (emoji) => {
        navigator.clipboard.writeText(emoji);
      };

  return (
    <table className="table-auto w-full">
    <tbody>
      {emojis.map((emoji, index) => (
        <tr key={index}
            className="hover:bg-gray-100 ">
            <td className="border px-4 py-2 cursor-pointer relative group" onClick={() => copyToClipboard(emoji.emoji)}>
            {emoji.emoji}{emoji.name} 
            <span className="absolute top-0 right-0 p-2 text-sm text-gray-400  opacity-0 group-hover:opacity-100">
                 Emojiyi Kopyala
              </span>
            </td>
        </tr>
      ))}
    </tbody>
  </table>
  );
}

EmojiList.propTypes = {
  emojis: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      emoji: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EmojiList;
