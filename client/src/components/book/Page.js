import React, { useState, useContext } from "react";
import BookContext from "../../context/bookcontext/bookContext";

const Page = (props) => {
  const bookContext = useContext(BookContext);
  const { books } = bookContext;
  const { pageNumber, bookTitle } = props;

  if (books && !books.books[bookTitle][1].pages[pageNumber]) {
    return "no vocab for this page";
  }
  return (
    <div>
      <p>Get Reading</p>
      <table>
      <thead>
        <tr>
          <th>Kanji</th>
          <th>Hirigana</th>
          <th>Definition</th>
        </tr>
        </thead>
        <tbody>
        {books &&
          books.books[bookTitle][1].pages[pageNumber].vocab.map(
            (word, index) => (
    
              <tr key={index}>
                <td>{word.kanji}</td>
                <td>{word.hirigana}</td>
                <td>{word.definition}</td>
                </tr>
    
            )
          )}
          </tbody>
      </table>
    </div>
  );
};

export default Page;
