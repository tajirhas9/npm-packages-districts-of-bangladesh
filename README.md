# Districts-of-Bangladesh

## Table of contentd

- [Installation] (#install)
- [Usage] (#usage)

## Installation

`npm i districts-of-bangladesh`

## Usage

### Get all the divisions as list:

```
import {GetAllDivisions} from 'districts-of-bangladesh'
var divisions = GetallDivisions()   // returns all the 8 divisions of Bangladesh
```

### Get all the districts ( unfiltered ):

```
import {GetDistrictsUnfiltered} from 'districts-of-bangladesh'
var districts = GetDistrictsUnfiltered()        // returns all the 64 districts of Bangladesh sorted
```

### Get districts under certain division:

```
import {GetDistrictsFiltered} from 'districts-of-bangladesh'
var districts = GetDistrictsFiltered("Chittgong")   // returns a list of the districts in Chittagong.
```

### Check if a given string is division or not:

```
import {IsADivision} from 'districts-of-bangladesh
var verdict = IsADivision("Chittagong")     // returns true
```
