import React, { useState, useRef, useEffect } from "react";
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { green } from '@material-ui/core/colors';

const Wrapper = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column
`;

const RowWraper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between 
`;

const useStyle = makeStyles({
    colField: {
        marginBottom: "20px"
    },
    rowField: {
        marginBottom: "20px",
        width: "180px"
    }
});

const Form = () => {
    const classes = useStyle();
    const [startDate, setStartDate] = useState("1990-12-22");
    const [EndDate, setEndDate] = useState("1990-12-22");
    const [category, setCategory] = useState("经济");
    const [selectValue, setSelectValue] = useState("positive")
    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
    useEffect(()=>{
        setLabelWidth(inputLabel.current.offsetWidth);
    },[]);

    return(
            <Wrapper>
                <RowWraper>
                <TextField
                    className={classes.rowField}
                    required
                    type="date"
                    id="outlined-name"
                    label="事件起始时间"
                    value={startDate}
                    width={5}
                    onChange={(event)=>setStartDate(event.target.value)}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    className={classes.rowField}
                    required
                    type="date"
                    id="outlined-name"
                    label="事件结束时间"
                    value={EndDate}
                    onChange={(event)=>setEndDate(event.target.value)}
                    margin="normal"
                    variant="outlined"
                />
                </RowWraper>
                <RowWraper>
                    <FormControl variant="outlined" className={classes.rowField}>
                        <InputLabel required ref={inputLabel} id="label">
                            事件类别
                        </InputLabel>
                        <Select
                            labelId="category"
                            id="category"
                            value={category}
                            onChange={(event)=>{setCategory(event.target.value)}}
                            labelWidth={labelWidth}
                        >
                            <MenuItem value="政治">政治</MenuItem>
                            <MenuItem value="经济">经济</MenuItem>
                            <MenuItem value="宗教">宗教</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="position" name="position" value={selectValue} onChange={(event)=>setSelectValue(event.target.value)} row>
                            <FormControlLabel
                            value="positive"
                            control={<Radio color="primary" />}
                            label="正面"
                            labelPlacement="start"
                            />
                            <FormControlLabel
                            value="negative"
                            control={<Radio color="primary" />}
                            label="负面"
                            labelPlacement="start"
                            />
                        </RadioGroup>
                    </FormControl>
                </RowWraper>
                <TextField
                    className={classes.colField}
                    id="details"
                    label="事件细节 *"
                    multiline
                    rows="10"
                    defaultValue=""
                    variant="filled"
                />
            </Wrapper>
    );
}

export default Form;