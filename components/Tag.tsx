import React from 'react';

import { TagProps } from '@/types';

interface TagDetailProps {
  tags: TagProps[];
  handleSelect: (selected: string) => void;
  selectedTag: string | null;
}

const Tag: React.FC<TagDetailProps> = ({ tags, handleSelect, selectedTag }) => {
  let sortedTags = tags;
  if (selectedTag) {
    const selectedIndex = tags.findIndex(tag => tag.title === selectedTag);
    if (selectedIndex !== -1) {
      sortedTags = [
        tags[selectedIndex],
        ...tags.slice(0, selectedIndex),
        ...tags.slice(selectedIndex + 1),
      ];
    }
  }

  return (
    <select
      onChange={e => handleSelect(e.target.value)}
      style={{
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
        color: '#333',
        backgroundColor: '#fff',
        border: '2.5px solid #000',
        borderRadius: '18px',
        padding: '8px',
        width: '100%',
        boxSizing: 'border-box',
        outline: 'none',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '4px',
        // Hide the arrow in WebKit browsers
        WebkitAppearance: 'none',
        // Hide the arrow in other browsers
        appearance: 'none',
        display: 'flex',
        justifyContent: 'center',
      }}
      value={selectedTag || ''}
    >
      <option value="">Select a tag</option>
      {sortedTags?.map(
        tag =>
          tag && (
            <option key={tag.title} value={tag.title}>
              {tag.title}
            </option>
          ),
      )}
    </select>
  );
};

export default Tag;
