import{_ as s,o as n,c as a,V as l}from"./chunks/framework.395991b1.js";const A=JSON.parse('{"title":"Creating button is so simple now","description":"","frontmatter":{"title":"Creating button is so simple now"},"headers":[],"relativePath":"widgets/tw-button.md","filePath":"widgets/tw-button.md"}'),e={name:"widgets/tw-button.md"},t=l(`<h1 id="twbutton" tabindex="-1">TwButton <a class="header-anchor" href="#twbutton" aria-label="Permalink to &quot;TwButton&quot;">​</a></h1><p>In every application, buttons are one of the main requirements and used to get user input or actions so we need to create buttons in which user can take some actions.</p><h2 id="widget-it-builds" tabindex="-1">Widget it builds <a class="header-anchor" href="#widget-it-builds" aria-label="Permalink to &quot;Widget it builds&quot;">​</a></h2><p>Tailwind ships with some custon Widgets which at the end renders as Native Widgets provided by flutter we are only adding a custom layer on top of fluttr&#39;s native widgets to give you access to style them with ease.</p><p>In case of <code>TwButton</code> you end up with some native widgets used together to create thid button widget which can be used as a normal button.</p><p>What You write:</p><div class="language-dart line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">TwButton</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    child</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&quot;I am a button&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isText</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">textSm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fontSemibold</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>What You Get:</p><div class="language-dart line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">InkWell</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    splashFactory</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">NoSplash</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">splashFactory</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// Other Inkwell Props</span></span>
<span class="line"><span style="color:#A6ACCD;">    child</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Row</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">        crossAxisAlignment</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CrossAxisAlignment</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">center</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        mainAxisSize</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MainAxisSize</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">min</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        children</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">AnimatedContainer</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">                child</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> _isBusy </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> _loadingWidget </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> child</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;">// Other Container props</span></span>
<span class="line"><span style="color:#A6ACCD;">            )</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="what-issue-does-it-solve" tabindex="-1">What issue does it solve? <a class="header-anchor" href="#what-issue-does-it-solve" aria-label="Permalink to &quot;What issue does it solve?&quot;">​</a></h2><p>As demonstrated in the example above, with just a few lines of code, Tailwind empowers you to effortlessly create a fully functional button, saving you valuable time and effort. This way it saves you a lot of time which can be wasted in building this button and fine tuning all the styling by yourself.</p><h2 id="using-twbutton" tabindex="-1">Using TwButton <a class="header-anchor" href="#using-twbutton" aria-label="Permalink to &quot;Using TwButton&quot;">​</a></h2><p>You can use this Widget to create any type of button for your flutter project. Some examples are below:</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-veJD2" id="tab-PWtlRUu" checked="checked"><label for="tab-PWtlRUu">Primary Button</label><input type="radio" name="group-veJD2" id="tab-m0C-2Yl"><label for="tab-m0C-2Yl">Secondary Button</label><input type="radio" name="group-veJD2" id="tab-EE7PvT0"><label for="tab-EE7PvT0">Danger Button</label></div><div class="blocks"><div class="language-dart active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">TwButton</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    child</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Text</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&quot;Click Me!&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isText</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">textSm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fontSemibold</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">px4</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">py2</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">roundedLg</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">primaryColor</span><span style="color:#A6ACCD;">(context)</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-dart line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">TwButton</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    child</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Text</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&quot;Click Me!&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isText</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">textSm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fontSemibold</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">px4</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">py2</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">roundedLg</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">secondaryColor</span><span style="color:#A6ACCD;">(context)</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-dart line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">TwButton</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    child</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Text</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&quot;Click Me!&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isText</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">textSm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fontSemibold</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">px4</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">py2</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">roundedLg</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">red500</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></div></div><h2 id="api-references" tabindex="-1">Api References <a class="header-anchor" href="#api-references" aria-label="Permalink to &quot;Api References&quot;">​</a></h2><p><code>TwButton</code> includes some handy extensions and methods which can help you add styling or functionality to button.</p><table><thead><tr><th>Mixins Extensions</th><th>Mixins Methods</th></tr></thead><tbody><tr><td><a href="/tailwind-cli/extensions/mixins/alignment.html">Alignment</a></td><td><a href="/tailwind-cli/methods/mixins/alignment.html">Alignment</a></td></tr><tr><td><a href="/tailwind-cli/extensions/mixins/border.html">Borders</a></td><td>N/A</td></tr><tr><td><a href="/tailwind-cli/extensions/mixins/colors.html">Colors</a></td><td><a href="/tailwind-cli/methods/mixins/colors.html">Colors</a></td></tr><tr><td><a href="/tailwind-cli/extensions/mixins/gestures.html">Gestures</a></td><td><a href="/tailwind-cli/methods/mixins/gestures.html">Gestures</a></td></tr><tr><td><a href="/tailwind-cli/extensions/mixins/gradients.html">Gradients</a></td><td><a href="/tailwind-cli/methods/mixins/gradients.html">Gradients</a></td></tr><tr><td><a href="/tailwind-cli/extensions/mixins/margins.html">Margins</a></td><td><a href="/tailwind-cli/methods/mixins/margins.html">Margins</a></td></tr><tr><td><a href="/tailwind-cli/extensions/mixins/paddings.html">Paddings</a></td><td><a href="/tailwind-cli/methods/mixins/paddings.html">Paddings</a></td></tr><tr><td><a href="/tailwind-cli/extensions/mixins/roundness.html">Roundness</a></td><td><a href="/tailwind-cli/methods/mixins/roundness.html">Roundness</a></td></tr><tr><td><a href="/tailwind-cli/extensions/mixins/shadow.html">Shadows</a></td><td><a href="/tailwind-cli/methods/mixins/shadow.html">Shadows</a></td></tr></tbody></table>`,17),p=[t];function o(r,i,c,d,y,D){return n(),a("div",null,p)}const u=s(e,[["render",o]]);export{A as __pageData,u as default};