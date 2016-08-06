
//get input as string
var input: string;


//MLA - from last full strop to end of "...", does not end in fullstop
var MLAstring = 'Ishii, Hiroshi, Minoru Kobayashi, and Jonathan Grudin. "Integration of interpersonal space and shared workspace: ClearBoard design and experiments." ACM Transactions on Information Systems (TOIS) 11.4 (1993): 349-375.';

var MLAtitle = RegExp('"[^\\"]*', 'm');
var MLAauthors = RegExp('\w[^\\.]*')

//APA - from (year). to end of "..." - ends in fullstop
var APAstring = 'Ishii, H., Kobayashi, M., & Grudin, J. (1993). Integration of interpersonal space and shared workspace: ClearBoard design and experiments. ACM Transactions on Information Systems (TOIS), 11(4), 349-375.'

var APAauthors = RegExp('\w[^\\(]*');
var APAtitle = RegExp('(\)\.)[^\\.]*\.'); //comes with leading '. ', must strip

//Chicago - text in first set of "..." - does not end in fullstop

var ChicAuthors = RegExp('\w[^\\.]*');
var ChicTitle = RegExp('\"[^\\".]*') //comes with leading doublequote

//Harvard - from year. to next full stop.

var HarvAuthors = RegExp('\w[^\d]*')
var HarvTitle = RegExp('')

//Vancouver - any number of text, letter. then text... . (fullstop)