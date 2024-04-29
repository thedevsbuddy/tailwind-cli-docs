import{_ as s,c as a,o as i,a3 as n}from"./chunks/framework.Dr6XptFR.js";const g=JSON.parse('{"title":"UI Centric","description":"","frontmatter":{},"headers":[],"relativePath":"core-concepts/ui-centric.md","filePath":"core-concepts/ui-centric.md"}'),e={name:"core-concepts/ui-centric.md"},t=n(`<h1 id="ui-centric" tabindex="-1">UI Centric <a class="header-anchor" href="#ui-centric" aria-label="Permalink to &quot;UI Centric&quot;">​</a></h1><p>What makes Tailwind CLI package a better solution for your application&#39;s needs is that it mainly focuses on the UI for your applications and give you flexibility to create your awesome design with less code and achieve what you visioned.</p><h2 id="what-powers-this-package-has" tabindex="-1">What powers this package has? <a class="header-anchor" href="#what-powers-this-package-has" aria-label="Permalink to &quot;What powers this package has?&quot;">​</a></h2><p>You can use this package to create any kind of application that you want to build and every app needs to have a different look and feel and same time look great to the end users. I created this package to give you the power of extenstion methods and getters as it is inspired by the the <code>TailwindCSS</code> which uses low level classes to use together and build awesome designs.</p><p>Some example features</p><h3 id="widgets" tabindex="-1">Widgets <a class="header-anchor" href="#widgets" aria-label="Permalink to &quot;Widgets&quot;">​</a></h3><p>As everything in flutter is Widget and you have to add a lot of styles and customize every property of the Widget to achieve the look you want. And everyone knows that how much time it takes to do this. So I created some Widgets that are the wrapper around the Native Flutter Widgets and comes with the power of extenstions which are the centralized styles for all kind of widgets that can be accessed from any widget and refers to the same style.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can check the <code>Widget</code> section to know more about the available widgtes in <code>TailwindCLI</code>.</p><p>Go to <a href="./../widgets/tw-button.html">Widgets Section</a></p></div><h4 id="twcontainer" tabindex="-1">TwContainer <a class="header-anchor" href="#twcontainer" aria-label="Permalink to &quot;TwContainer&quot;">​</a></h4><div class="language-dart vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/// Flutter&#39;s Widget: </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">[Container]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/// From Tailwind: </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">[TwContainer]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/// It gives you same </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">[Container]</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> Widget as flutter</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/// But it comes with different approach to style it.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TwContainer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    child</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;I am a TwContainer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        style</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> TextStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fontSize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.px4 </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Gives horizontal padding: 16</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.py5 </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Gives vertical padding: 20</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.rounded </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Makes the container rounded</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.shadow </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Applies box shadows to the container</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h4 id="twtext" tabindex="-1">TwText <a class="header-anchor" href="#twtext" aria-label="Permalink to &quot;TwText&quot;">​</a></h4><div class="language-dart vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/// Flutter&#39;s Widget: </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">[Text]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/// From Tailwind: </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">[TwText]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/// It gives you same </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">[Text]</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> Widget as flutter</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/// But it comes with different approach to style it.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TwText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;I am a TwText&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.textBase </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Provides base font size: 16</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.coolGray700 </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Renders [TwText] widget with cool gray color [Checkout Colors Here](../colors/background-color.md)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h3><p>Tailwind offers a range of handy methods that facilitate effortless creation and execution of actions.</p><h4 id="gesture-recognizers" tabindex="-1">Gesture Recognizers <a class="header-anchor" href="#gesture-recognizers" aria-label="Permalink to &quot;Gesture Recognizers&quot;">​</a></h4><div class="language-dart vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/// Flutter&#39;s Widget: </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">[InkWell]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/// From Tailwind: </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">[onTap]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/// It gives you same </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">[InkWell]</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> Widget as flutter</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/// But it applies </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">[onTap]</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> method with different approach.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TwContainer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    child</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> TwText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;I Am Clickable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .textBase</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.px4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.py5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.rounded</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.shadow</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onTap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Click&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)), </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// This is where magic happens</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p><em>In above example we created a container and made it clickable so we can do something when clicked on it.</em></p><h4 id="center-widget" tabindex="-1">Center Widget <a class="header-anchor" href="#center-widget" aria-label="Permalink to &quot;Center Widget&quot;">​</a></h4><div class="language-dart vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TwText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;I Am Centered Text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.textBase</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// This is where magic happens</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><em>In above example we created a container and made it clickable so we can do something when clicked on it.</em></p><h3 id="extensions" tabindex="-1">Extensions <a class="header-anchor" href="#extensions" aria-label="Permalink to &quot;Extensions&quot;">​</a></h3><p>In the package you get a list of extensions which can be used to apply different types of styles to any widget.</p><h4 id="istext" tabindex="-1">isText: <a class="header-anchor" href="#istext" aria-label="Permalink to &quot;isText:&quot;">​</a></h4><div class="language-dart vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;I Am Clickable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.isText </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// This is where magic happens</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.textBase</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><em>In the above example we have a string and using <code>isText</code> extension we converted it to a <code>Text</code> Widget.</em></p><h4 id="iscontainer" tabindex="-1">isContainer: <a class="header-anchor" href="#iscontainer" aria-label="Permalink to &quot;isContainer:&quot;">​</a></h4><div class="language-dart vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;I Am Clickable&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.isText</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.textBase</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.isContainer  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// This is where magic happens</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><em>In the above example we have a string which is being converted to Text Widget and after that in the Text Widget we used <code>isContainer</code> Extension to wrap <code>Text</code> with <code>Container</code> Widget.</em></p><p>There are a lot more awesome feature in the package that can be implemented to any app.</p>`,29),l=[t];function p(h,r,k,d,c,o){return i(),a("div",null,l)}const u=s(e,[["render",p]]);export{g as __pageData,u as default};