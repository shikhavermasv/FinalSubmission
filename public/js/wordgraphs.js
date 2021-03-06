var width =600,
height=400;
var wordScale=d3.scale.linear().range([10,60]);
var fill = d3.scale.category20();

function getText(){
	var userinput = "銀シャリ #علبه_الدخان_ب26ريال #MilanCrotone #FelizDomingo #trombaMLG #زد_رصيدك50 Betis Niang ハライチ Piero Pelù #VemPraRuaBrasil #당신의_크리스마스_스케줄 #وفاه_المعلمه_اماني_السفياني #真田丸 #DomingoComVoceSabiaSDV #PodemosEsViolencia #gegarvaganza #LabanLeni #4AralıkDünyaMadencilerGünü #YanlızDeğilsinERDOĞAN #4DeDiciembre #MarchaDosPatinhosPamonhas #안치이는_요소 #봉봉_정신연령테스트 #BOULIV #세븐틴_너_때문에_붐붐 #شي_حلو_واختفي#خطيب_يستنكر_انتشار_شاهي_الجمر #BoybandPHLastElim #مسيره_الاتحاد #buitenhof #IQ24";
    var strarr = userinput.split(" ");	
	var strarr2= strarr.map(function(d) {
       return {text: d, size: 10 + Math.random() * 90};
     });
 d3.select("svg").remove();
wordScale
.domain([d3.min(strarr2,function(d){
return d.size;

}),
d3.max(strarr2,function(d){
return d.size;

})
]);
	  d3.layout.cloud().size([width, height])
      .words(strarr2)
      //.rotate(function() { return ~~(Math.random() * 2) * 90; })
      .font("Impact")
      .fontSize(function(d) { return wordScale(d.size); })
      .on("end", draw)
      .start();
	  
}

  function draw(words) {

    d3.select("#word-cloud").append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate("+(width/2)+","+(height/2)+")")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .style("font-family", "Impact")
        .style("fill", function(d, i) { return fill(i); })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });
  }