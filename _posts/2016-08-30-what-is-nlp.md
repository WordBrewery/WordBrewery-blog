---
layout: post
title: "Why should language learners care about Natural Language Processing (NLP)?"
description: "What is Natural Language Processing (NLP), and how can WordBrewery and other language learning apps use it to teach languages?"
category: Technology
featured: true
image: mountains_mist.jpg
---

[**Natural Language Processing (NLP)**](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3168328/) refers to the automatic, computerized processing of texts to analyze the language in those texts. NLP software processes a text and returns data about language patterns in the text. Language app developers like {{site.wordbrewery}} can use NLP technologies to create efficient and innovative learning software.

{{site.wordbrewery}} uses many NLP technologies to help our learners learn languages, and we are constantly looking for new ways to use those technologies. Here are some examples of how we use NLP and what challenges that task involves.

*[Subscribe to this blog](http://feeds.feedburner.com/LanguageUntapped) to receive the latest posts by email or RSS.*


## Sentence segmentation to divide news articles into sentences


{{ site.wordbrewery }}'s sentence collector uses *sentence segmentation* to identify where sentences begin and end&amp;mdash;a computing task that is more difficult and error-prone than one might think. Here are screenshots of (now-fixed) sentence segmentation bugs that have cluttered our database along the way:

![WordBrewery sentence segmentation bug: please report bad sentences when you find them by clicking the thumbs-down button]({{ site.baseurl }}/img/sentence_segmentation_bug.jpg)
*Here, the sentence was split at a semicolon.*

![WordBrewery sentence segmentation bug: please report bad sentences when you find them by clicking the thumbs-down button]({{ site.baseurl }}/img/arabic_quotation_mark_bug.png)
*This Arabic sentence has a stray arrow bracket.*

![WordBrewery sentence segmentation bug: please report bad sentences when you find them by clicking the thumbs-down button]({{ site.baseurl }}/img/german_punctuation_bug.jpg)
*This German sentence has the opening quotation mark, but not the closing quotation mark.*

![This Italian sentence has the opposite problem: only a closing quotation mark]({{ site.baseurl }}/img/italian_punctuation_error.jpg)
*This Italian sentence has the opposite problem: only a closing quotation mark.*


## Word tokenization to identify the boundaries of each word


Then, in order to show learners definitions and example sentences when they click on a word, {{ site.wordbrewery }} uses *word tokenization* to separate a word from its surrounding text. This is particularly difficult for languages like Chinese and Japanese that do not use spaces between words. The challenges of processing these languages has led some of the largest language-learning apps to [focus their efforts elsewhere](https://www.quora.com/When-will-the-Duolingo-Thai-for-English-course-be-ready/answer/Ryan-McCarl?srid=DmtJ
) (an approach we disagree with). In Chinese, for example, we currently have a high-priority bug in which the user clicks a character and only the character itself is selected rather than the full word. This is a great example of a tricky word tokenization problem:

![WordBrewery just fixed this Chinese word tokenization bug.]({{ site.baseurl }}/img/chinese_word_tokenization_bug.png)
*WordBrewery just fixed this Chinese word tokenization bug.*


## Named-entity recognition to identify names, places, and other proper nouns


We also use *named-entity recognition* to identify proper nouns. All of our sentences include almost exclusively high-frequency words (sentences are limited to the top 500 words [lemmas, actually] at the beginner level, 3000 at the intermediate level, 10,000 at the advanced level, and 20,000 at the master level). But we don't want to filter out sentences that include names, especially since those are often the most interesting and timely sentences: when I am studying Italian on {{ site.wordbrewery }} and come across a sentence from an Italian newspaper that uses the words "Obama" or "Trump," for example, I am immediately curious. But those are names, not words we want to teach or include in our frequency lists. So, for each of {{ site.wordbrewery }}'s {{ site.languages-offered }} languages, we have to build in ways for the {{ site.wordbrewery }} algorithm to identify whether a word is a name or not--in other words, we have to add support for named-entity recognition on a language-by-language basis. We tried to take a shortcut early on by instructing the algorithm to simply ignore words that it did not find on its frequency list; we had to scrap that approach, as this bug screenshot from March illustrates:

![In this bug, an English sentence appeared among the French sentences.]({{ site.baseurl }}/img/english_sentence_in_french_bug.png)
*In this bug, an English sentence appeared among the French sentences.*


## Lemmatization and stemming to recognize different forms of the same base word


We use *lemmatization* and *stemming* to treat different forms of a word as a single word. We don't want English users to have to learn "phone," "phones," and "phoned" as separate words, for example. Lemmatization is an imperfect science, especially with languages that have fewer publicly available NLP technologies. As with named-entity recognition, we have to add support for lemmatization on a language-by-language basis. Here is an example of a lemmatization bug that I found while studying Portuguese; the algorithm was confusing one example of a reflexive verb, *trata-se* (it is), with the pronoun *se* (it) that appears in all Portuguese reflexive verbs--including *se dizem* (they say), as in the screenshot:

![An example of a lemmatization bug affecting Portuguese reflexive verbs.]({{ site.baseurl }}/img/portuguese_lemmatization_error.jpg)


## Frequency distributions to identify high-frequency words


Finally, the NLP technology that is at the core of WordBrewery's sentence finder and sentence scoring algorithm is used to identify *word frequency*. We are constantly looking for and refining frequency lists for all {{ site.languages-offered }} languages that {{ site.wordbrewery }} teaches. To [paraphrase Schopenhauer](https://www.goodreads.com/quotes/255277-the-art-of-not-reading-is-a-very-important-one), "A prerequisite to learning high-frequency words is ignoring low-frequency words: for life is short." Here is a snapshot of our Japanese word frequency list:

![A snapshot of WordBrewery's Japanese word frequency list.]({{ site.baseurl }}/img/wordbrewery_japanese_frequency_screenshot.png)

{{ site.wordbrewery }} is constantly brainstorming new ways to help people learn to read their target language and master the high-frequency vocabulary they need for real fluency.

*We would love to [hear your thoughts](https://docs.google.com/forms/d/1VLYcHdI5-FLlr5hMRJ1DzhLKDUzfkPvyI8Bx3bvvk3w/viewform) about what features you would like to see {{ site.wordbrewery }} add in the future. And if you haven't done so yet, please take a moment to [subscribe to this blog](http://feeds.feedburner.com/LanguageUntapped) to help us grow and get the traction we need to build the features you want.*

{% include post_footer.html %}