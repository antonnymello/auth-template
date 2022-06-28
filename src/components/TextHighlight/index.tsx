import { chakra } from '@chakra-ui/react';

interface TextHighlightProps {
  children: React.ReactNode;
  onClick: () => void;
}

const TextHighlight = ({ children, onClick }: TextHighlightProps) => {
  return (
    <chakra.span
      fontWeight='bold'
      textDecoration='underline'
      cursor='pointer'
      onClick={onClick}
    >
      {children}
    </chakra.span>
  );
};

export default TextHighlight;
