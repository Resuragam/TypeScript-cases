type World = "world";
 
type Greeting = `hello ${World}`;

type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs} _id`;
// type AllLocaleIDs = "welcome_email _id" | "email_heading _id" | "footer_title _id" | "footer_sendoff _id"

type ShoutyGreeting = Uppercase<Greeting>
// type ShoutyGreeting = "HELLO WORLD"

type QuietGreeting = Lowercase<'HELLO WORLD'>
// type QuietGreeting = "hello world"

type LowercaseGreeting = "hello, world";
type CapitalizeLowercaseGreeting = Capitalize<LowercaseGreeting>;
// type CapitalizeLowercaseGreeting = "Hello, world"

type UncomfortableGreeting = Uncapitalize<'HELLO WORLD'>;
// type UncomfortableGreeting = "hELLO WORLD"

