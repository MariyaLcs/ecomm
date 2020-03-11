module.exports = ({ content }) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head></head>
        <body>
            ${content}
            <script src="index.js"></script>
        </body>
    </html>
`;
};
