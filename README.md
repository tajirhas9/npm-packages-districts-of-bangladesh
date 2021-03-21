# Districts-of-Bangladesh

## Table of contentd

- [Installation] (#install)
- [Usage] (#usage)

## Installation

`npm i districts-of-bangladesh`

## Usage

### Get all the divisions as list:

`import {GetAllDivisions} from 'districts-of-bangladesh'`
`var divisions = GetallDivisions()`

### Get all the districts ( unfiltered ):

`import {GetDistrictsUnfiltered} from 'districts-of-bangladesh'`
`var districts = GetDistrictsUnfiltered()`

### Get districts under certain division:

`import {GetDistrictsFiltered} from 'districts-of-bangladesh'`
`var districts = GetDistrictsFiltered("Chittgong")`

### Check if a given string is division or not:

`import {IsADivision} from 'districts-of-bangladesh`
`bool verdict = IsADivision("Chittagong")`
