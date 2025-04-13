if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}
else
{     
     ready()
}

function ready(){

    hike_year = 4;
    hike_index = 1.45;

    bsc = `<li>Hike Year is ${hike_year}</li>
           <li>Hike Rate is ${hike_index}</li> <br>`
    document.getElementById('mega').innerHTML = bsc;
    document.getElementsByClassName('doge')[0].addEventListener('click',submit)
    document.getElementsByClassName('fat')[0].addEventListener('click',reset)    
 }


function clc() {

    pmt = document.getElementsByClassName('inr')[0].value
    itr = document.getElementsByClassName('inr')[1].value
    mat = document.getElementsByClassName('inr')[2].value 
    ytm = document.getElementsByClassName('inr')[3].value  

    
    principle = +pmt
    mony = +mat
    years = +ytm
    inti = +itr
    var tmp_amount = principle;
    var static_amount = tmp_amount;

    data5 = [];
    data4 = [];
    zarr = [];

    zyear = 1;
    intrate = 0;
    intex = intrate;
    var asc = '';

    document.getElementById('fry').innerHTML = years + '<br>' + principle + '<br>' + mony +'&nbsp;';    
    
    while(intrate < inti){

        intrate+= 1;   
        zyear = 1;    
        principle = static_amount;    
        tmp_amount = static_amount;            

        while(1){

            principle = principle*(1+(intrate/100));            
            

            if(((mony*(0.9) > principle) && zyear < years) == 0){                

                zarr.push(zyear);
                var data3 = {
                    zyear : Math.trunc(principle)   
                }

                data4.push(data3);                
                asc+= `<li>${zyear}:&nbsp;${Math.trunc(principle)}:&nbsp;${tmp_amount}</li>`;
                document.getElementById('mutton').innerHTML = asc;
                asc+= '<br>';            
                break;                
            }

            if(zyear % hike_year == 0){
                tmp_amount*= hike_index;
            }

            principle+= tmp_amount;    
            zyear+= 1;
        }
        
        var data0 = {

            intrate : data4
        }

        }

    data = {
        "Hike Year" : hike_year, 
        "Principle" : static_amount, 
        "Maturation Year" : years, 
        "Intrate" : data4
    }

    console.log(data);

}

function reset(event) {

    document.getElementsByClassName('inr')[0].value = 0
    document.getElementsByClassName('inr')[1].value = 0
    document.getElementsByClassName('inr')[2].value = 0
    document.getElementsByClassName('inr')[3].value = 0

    document.getElementById('tester').replaceChildren();
    limit = 0 
}

var limit = 0

function submit(event) {    

    clc();
    var i = 1
    console.log(inti) 
    console.log(intrate)
    if(i > limit)
    {   

        kekx = [];            
        keky = [];        

        for(var i = 0; i < inti - intex; ++i){

        keky.push(data.Intrate[i]['zyear']);
        if(data.Intrate[i]['zyear'] > mony*0.9){

            kekx.push('MAT Y'+zarr[i]+'@'+(i+1)+'%');                        
        }
        else{
            kekx.push('Y'+zarr[i]+'@'+(i+1)+'%');            
        }
        
        }

        console.log(data.Intrate[0]['zyear'])
        d1 = document.createElement('div');
        d1.setAttribute("id","output"+ i)
        d1.style.width = 1400+"px";
        d1.style.height = 1000+"px";

        document.getElementById('tester').appendChild(d1);

        print(i);

    }   
  else
   alert('Please Reset or Update the intrate')
}

function print(i) {

        var trace1 = {
          type: 'bar',

          x: kekx,

          y: keky,
          
          marker: {
              color: '#C8A2C8',
              line: {

                  width: 1.5
              }
          }
        };

        var data = [ trace1 ];
        var layout = { 

          title: 'After '+ years +' Years or Maturation',

          font: {size: 18}

        };

        var config = {responsive: true}

        Plotly.newPlot('output'+ i, data, layout, config );
        if(i == inti-1)
            limit = inti;        
}