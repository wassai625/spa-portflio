
import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

export default function Search() {
  return (
    <div style={{ 
        minWidth: 250 ,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 100,
          }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={venue.map((option) => option.title)}
        renderInput={(params) => (
          <TextField {...params} label="フリーワード" margin="normal" variant="outlined" />
        )}
      />
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={venue.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="検索入力"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </div>
  );
}


const venue = [
  { title: 'zeep 福岡', location: "福岡" },
  { title: 'zeep 東京', location: "東京" },
  { title: 'zeep 札幌', location: "北海道" },
  { title: 'zeep 仙台', location: "宮城" },
  { title: 'zeep 大阪', location: "大阪" },
  { title: 'Dram Be-1', location: "福岡" },
  { title: 'Dram logos', location: "福岡" },
  { title: '小倉fuze', location: "福岡" },
  { title: 'Beet Station', location: "福岡" },
  { title: 'Queblic', location: "福岡" },
  
  
];
