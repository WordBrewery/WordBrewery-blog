---
layout: post
title: "How WordBrewery works (and what we’re planning next)"
description: "As we fine-tune the mechanics behind WordBrewery, we plan to show users content based on their current knowledge."
category: Announcements
image: steps.jpg
published: false
featured: true
---
How WordBrewery works (and what we’re planning next)

*Explore Mode*

WordBrewery helps you build your vocabulary by studying example sentences from news sources across the globe. We pull real sentences from recent articles written by native speakers. You can save these sentences—or individual words—to study lists, then review or export those study lists later.

We use [Microsoft Translator](https://www.microsoft.com/en-us/translator), [Google Translate](https://translate.google.com/m/translate), and in some cases our own translators to provide approximate translations for individual words and full sentences. You can see individual word meanings by hovering over a word (on the desktop site) or touching the word (on the mobile site), and you can see full-sentence translations by pressing the question marks for full sentences (when you press the question mark). We recognize that the state of machine translation is not perfect, so we provide both Google and Microsoft translations to help you better determine the meaning of a sentence. In the coming months, we plan to add a feature to allow users to suggest edits to translations.

WordBrewery's single-word translations minimize the need for whole-sentence English translations. We believe that language is a game and each sentence is a puzzle. Before clicking the translate button, try to "solve" the sentence on your own by using clues like the structure of the sentence, cognates, and familiar words. Get more context by clicking the newspaper icon to see the source of the sentence. Click the words you don't know, learn their meanings,  and then try reading the sentence again with that new knowledge. Finally, as a last resort, you can check your understanding by looking at the full-sentence translations.

In WordBrewery's courses, we will reduce the need for full-sentence translations even further by showing users only sentences that we think they can read based on their current knowledge.

*Individualized Courses*

WordBrewery’s core offering is still in development: individualized courses. In our soon-to-be-released Course Mode, we will display only sentences that are tailored to the exact current vocabulary knowledge of each user. For example, our Intermediate German course will start with a simple proficiency test and assume that the reader is familiar with the 500 most common German words. We will then show the learner sentences that contain exclusively words that we think they already know, plus one additional high-frequency word (and up to one proper noun).

Example: Suppose a WordBrewery user is enrolled in our future Intermediate German course but has at some point demonstrated that she does not know the word "deshalb." Our algorithm might show that user the following sentence:

"Deshalb arbeiten wir weiter." (Therefore, we continue to work.)

We would expect that the learner could understand 3/4 of this sentence—everything except the word "deshalb"—because all four words are in the top 500 items on the German frequency list. The learner will be instructed to click each word she doesn’t know; clicking the word will display another tailored example sentence containing that word, plus an information box with translations, etymology, synonyms, part-of-speech information, etc. We would expect the learner to click only "deshalb" in this example.

Over time, WordBrewery’s Course Mode will continue to show the learner example sentences that contain "deshalb" and give her quiz questions based on those sentences. As the learner's knowledge score for "deshalb" improves over time, we will display it less and less. The learner's set of known words will have expanded to include "deshalb"; as the set of known words expands, the set of possible sentences the user may see also expands.

WordBrewery’s goal is to present users with content that they mostly understand, and to only introduce a new word when the learner demonstrates evidence of having learned a previous target word.

*What else?*

We have big ambitions for WordBrewery. In the coming months, we will also add word-sense disambiguation, named-entity recognition, parts-of-speech tagging, readability measures, and grammatical tags.

What else would you like to see? Let us know in the comments or email admin@wordbrewery.com.


Suggested picture: https://unsplash.com/photos/IT8m_FWIlhE
