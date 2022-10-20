import Box from '@src/components/Box';

export default function Background() {
  const imageUrl =
    'https://images.unsplash.com/photo-1650661926447-9efb2610f64c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80';

  return (
    <Box
      styleSheet={{
        width: '100%',
        height: '400px',
        backgroundImage: `url("${imageUrl}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    />
  );
}
