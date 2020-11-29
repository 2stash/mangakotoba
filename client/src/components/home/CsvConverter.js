import React, {useState} from 'react';
import Papa from 'papaparse';


const CsvConverter = () => {
  const [file, setFile] = useState();
  let conversionResults;
  const onChangeHandler = e => {
    setFile(e.target.files[0])
  }

  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(file.name)
    let fileName = file.name.split('');
    for(let i = 0; i < fileName.length;i++ ){
      if(fileName[i] === "."){
        fileName.splice(i)
        fileName = fileName.join('')
      }
    }

    Papa.parse(file, {
      header: true,
      complete: function(results){
        conversionResults = results
      }
    });
  

  }
  return (
    <div>
    <form onSubmit={onSubmitHandler}>
      <input type="file" name="file" onChange={onChangeHandler}/>
      <input type="submit" value="Convert" />
      </form>
    </div>
  )
}

export default CsvConverter
