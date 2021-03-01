# Review2

Digital audio plugins
Filters to the track
Band pass filter

3 inputs
1. music track - array of integers
2. low pass filter - set by the user defaults to 40
3. high pass filter - set by the user defaults to 1000

output
Music track but with any integers lower than lpf is == lpf and any integers higher than hpf == hpf

| Input | Output |
| ------|---------|
| [45, 50, 55] | [45, 50, 55] |
| [35, 50, 50] | [40, 50, 50] |
| [50, 50, 1050] | [50, 50, 1000] |

filter([35, 50, 50]) => [40, 50, 55]

filter (5, [45, 50, 55]) => [45, 50, 55]

