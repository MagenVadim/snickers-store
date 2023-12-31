

const thumb_Nail = document.querySelectorAll('.img-preview');
const parent_Thumbnail = document.querySelector('.preview');
const child_Preview = parent_Thumbnail.childNodes;
let main_image = document.querySelector('.main-image');
const inside_image = document.querySelector('.inside-main-image'); // variable for working with imaging that appears close-up against a shaded background.
const basket_item_list = document.querySelector(".basket-item-list") // The parent node to which we will add the Template Clone
const counter = document.querySelector('.counter'); // Element with an icon on the Navigation bar with the number of selected positions.

const math_button = document.querySelector('.plus-minus');

const button_minus = document.querySelector('#button-minus');
const image_minus = document.querySelector('#image-minus');

const button_plus = document.querySelector('#button-plus');
const result = document.querySelector('.result');
let count = 1;
let ser_numb = 1;

let new_item = {};
let collect_cart ={};
let id_item_collect_cart;
let total_sum_cart=0;

const basket = document.querySelector('.basket');
const cart_parent = document.querySelector('.cart-parent'); // variable for working with the modal window "Cart"

const popup_parent = document.querySelector('.popup_parent');
const empty_cart = document.querySelector('.empty-cart');
const cart_description = document.querySelector('.cart-description');


let header_name_text_content = document.querySelector('.header').textContent;

let str_price = document.querySelector('.price').textContent;
let price = str_price.replace((/[^\d+\.\d+]/g), '');
let price_numb = Number(price);

const add_to_cart = document.querySelector('.add-to-cart');
let count_items_in_cart = [];

const icon_close = document.querySelector('.icon-close');

const arrow_previous= document.querySelector('.icon-arrow.previous');
const arrow_next= document.querySelector('.icon-arrow.next');

const men_list = document.querySelector('#men');
const women_list = document.querySelector('#women');
const products = document.querySelector('#products');
let sex_status;

const list_items = document.querySelector('.list-items');
const list_parent = document.querySelector('.list-parent');
const ul_List = document.querySelector(".list-items");

const checkout_button = document.querySelector(".checkout-button")

const main = document.querySelector(".main");
const home = document.querySelector(".home");
const left_side_bar = document.querySelector('.left-side-bar');

const start_home = document.querySelector('#start-home');
const underline_home = document.querySelector('#start-home .underline');
const underline_men = document.querySelector('#men + .underline');
const underline_women = document.querySelector('#women + .underline');

const back_arrow_shipping = document.querySelector('.back-arrow-shipping');
const close_checkout_form = document.querySelector('#close-first-step');
const close_shipping_form = document.querySelector('#close-second-step');

const price_range = document.querySelector('.price-range-wrapper');
const button_price_filter = document.querySelector('.price-filter');
let ch_box_values_list=[];
let new_collection_details = {};
let new_collection_details_by_price_sorting = {};
let new_collection_details_by_prices = {};
let new_collection_details_by_prices_and_sexStatus = {};
let new_collection_details_by_prices_and_chBox = {}
let new_collection_details_by_prices_and_chBox_and_sexStatus = {};

let new_collection_details_by_checkboxes = {};
let new_collection_details_by_checkboxes_and_sexStatus = {};

let new_collection_details_by_prices_and_New = {}; // if only Latest checkbox parameter is true
let new_collection_details_by_prices_and_chBox_NEW = {}; // if both checkboxes parameters (Run/Basket/Tennis) and Latest is true
let ch_bx_true;

let status_price_range = false;

let json_catalog_number = "2023-999";

let busket_collection = {
    "New Balance": ["2023-999", "2023-998", "2023-997", "2023-996", "2023-995"],
    "Puma": ["2023-123", "2023-124", "2023-125"],
    "Adidas":["2023-555", "2023-556"],
    "Asics":["2023-888"],
};

let filtred_collection = [];


async function generateData(){
    
    let collection_details = await fetch("/data.json").then((response) => response.json());
    collection_details = JSON.stringify(collection_details);
    collection_details = JSON.parse(collection_details);

    const container_presentation = document.querySelector('.presentation'); // The container to attach the cloned TEMPLATE to 
           
    // the main function that builds images of Snickers Items on the Home Page.
    function main_page(collection_details){
        for (firm in busket_collection){
            const temp = document.getElementsByTagName("template")[2];
            const clone = temp.content.cloneNode(true);
            const snickers_container = clone.querySelector(".snickers-container");
            const firm_header = clone.querySelector(".firm-header");   
            firm_header.innerText = firm;
    
            for (tag in collection_details){
                if(collection_details[tag].firm===firm){
                    var slick_slide_container = clone.querySelector(".slick-slide-container"); 
    
                    const slick_slide = document.createElement("div");
                    slick_slide.className="slick-slide";
                    slick_slide.id=tag;
                    slick_slide_container.appendChild(slick_slide);
        
                    const slick_image = document.createElement("img");
                    slick_image.className="image-present";
                    slick_image.src=`images/${tag}-image-product-1.jpg`;
                    slick_slide.appendChild(slick_image);
        
                    const item_name = document.createElement("p");
                    item_name.className="item-name";                
                    item_name.textContent=collection_details[tag].model;
                    slick_slide.appendChild(item_name);
    
                    const sex = document.createElement("p");
                    sex.className="sex-name";
                    sex.textContent="sex: ";
    
                    const sex_context = document.createElement("span");                
                    sex_context.textContent=`${collection_details[tag].sex}`;
                    if(collection_details[tag].sex=="men"){
                        sex_context.className="sex-context men";
                    };
                    if(collection_details[tag].sex=="women"){
                        sex_context.className="sex-context women";
                    };
                    sex.appendChild(sex_context);
                    slick_slide.appendChild(sex);
    
                    const style = document.createElement("p");
                    style.className="style-name";
                    style.textContent=`style: ${collection_details[tag].style}`;
                    slick_slide.appendChild(style);

                    const collection_tag = document.createElement("p");
                    collection_tag.className="collection-tag";
                    collection_tag.textContent=`collection: ${collection_details[tag].collection}`;
                    slick_slide.appendChild(collection_tag);
    
                    const item_price = document.createElement("p");
                    item_price.className="item-price";
                    item_price.textContent=`${collection_details[tag].new_price}` + ' $';
                    slick_slide.appendChild(item_price);
    
                    if(collection_details[tag].collection==='New'){
                        const new_icon = document.createElement("img");
                        new_icon.className="new-icon";
                        new_icon.src='images/new-icon.jpg';
                        slick_slide.appendChild(new_icon);
                    }               
                }                
            }
            container_presentation.appendChild(snickers_container);           
        }
        
        let a = document.querySelectorAll(".slick-slide");
        return a;
    }
    
    main_page(collection_details) // call the function to draw the Snickers Items on the Home page.
    
    // ---------------------------------------SORTING-------------------------------------------------------------
    
    const dropdown_button_sorted_by_price_low_high = document.querySelector('#by_price_low_high');
    const dropdown_button_sorted_by_price_high_low = document.querySelector('#by_price_high_low');
    
    
    function presentation_by_sorting(collection_details){
        console.log("present details: ");
        console.log(collection_details);

        const temp = document.getElementsByTagName("template")[2];
        const clone = temp.content.cloneNode(true);
        const snickers_container = clone.querySelector(".snickers-container");
        var header_block = clone.querySelector(".header-dropdown");
        header_block.innerHTML='';
    
        for (tag in collection_details){        
            var slick_slide_container = clone.querySelector(".slick-slide-container");         
    
            const slick_slide = document.createElement("div");
            slick_slide.className="slick-slide";
            slick_slide.id=tag;
            slick_slide_container.appendChild(slick_slide);
    
            const slick_image = document.createElement("img");
            slick_image.className="image-present";
            slick_image.src=`images/${tag}-image-product-1.jpg`;
            slick_slide.appendChild(slick_image);
    
            const item_name = document.createElement("p");
            item_name.className="item-name";                
            item_name.textContent=collection_details[tag].model;
            slick_slide.appendChild(item_name);
    
            const sex = document.createElement("p");
            sex.className="sex-name";
            sex.textContent="sex: ";
    
            const sex_context = document.createElement("span");                
            sex_context.textContent=`${collection_details[tag].sex}`;
            if(collection_details[tag].sex=="men"){
                sex_context.className="sex-context men";
            };
            if(collection_details[tag].sex=="women"){
                sex_context.className="sex-context women";
            };
            sex.appendChild(sex_context);
            slick_slide.appendChild(sex);
    
            const style = document.createElement("p");
            style.className="style-name";
            style.textContent=`style: ${collection_details[tag].style}`;
            slick_slide.appendChild(style);

            const collection_tag = document.createElement("p");
            collection_tag.className="collection-tag";
            collection_tag.textContent=`collection: ${collection_details[tag].collection}`;
            slick_slide.appendChild(collection_tag);
    
            const item_price = document.createElement("p");
            item_price.className="item-price";
            item_price.textContent=`${collection_details[tag].new_price}` + ' $';
            slick_slide.appendChild(item_price);
    
            if(collection_details[tag].collection==='New'){
                const new_icon = document.createElement("img");
                new_icon.className="new-icon";
                new_icon.src='images/new-icon.jpg';
                slick_slide.appendChild(new_icon);
            }                                
        }
        container_presentation.appendChild(snickers_container);
        let a = document.querySelectorAll(".slick-slide");
        return a; 
    }
    
    //create an array consisting of objects (ID - price)
    let priceMap = [];
    for (key in collection_details){
        let a = {};
        a.id = key;
        a.price = collection_details[key].new_price
        priceMap.push(a)
    }
    
    dropdown_button_sorted_by_price_low_high.addEventListener('click', ()=>{
        //sort the array in ascending order of price
        priceMap.sort((a, b) => a.price - b.price)
        new_collection_details_by_price_sorting={};

        if (sex_status && status_price_range){
            priceMap.forEach((pair)=>{
                if(new_collection_details_by_prices_and_sexStatus[pair.id]){
                    new_collection_details_by_price_sorting[pair.id]=new_collection_details_by_prices_and_sexStatus[pair.id];   
                }                 
            }) 
            container_presentation.innerHTML='';
            presentation_by_sorting(new_collection_details_by_price_sorting);
            return
        }
        
        if (sex_status==="women" || sex_status==="men"){           
            priceMap.forEach((pair)=>{
                if(filtred_collection[pair.id]){
                    new_collection_details_by_price_sorting[pair.id]=filtred_collection[pair.id];   
                }                 
            })          
            container_presentation.innerHTML='';
            presentation_by_sorting(new_collection_details_by_price_sorting);
            return;   
        }

        if(status_price_range){
            priceMap.forEach((pair)=>{
                if(new_collection_details_by_prices[pair.id]){
                    new_collection_details_by_price_sorting[pair.id]=new_collection_details_by_prices[pair.id];   
                }                 
            })          
            container_presentation.innerHTML='';
            presentation_by_sorting(new_collection_details_by_price_sorting);
            return; 
        }

        if(ch_bx_true>0){
            priceMap.forEach((pair)=>{
                if(new_collection_details_by_checkboxes[pair.id]){
                    new_collection_details_by_price_sorting[pair.id]=new_collection_details_by_checkboxes[pair.id];   
                }                 
            })          
            container_presentation.innerHTML='';
            presentation_by_sorting(new_collection_details_by_price_sorting);
            return; 
        }


        priceMap.forEach((pair)=>{
            new_collection_details_by_price_sorting[pair.id]=collection_details[pair.id];    
        })
        container_presentation.innerHTML='';
        presentation_by_sorting(new_collection_details_by_price_sorting);
    })
    
    dropdown_button_sorted_by_price_high_low.addEventListener('click', ()=>{
        //sort the array in discending order of price
        priceMap.sort((a, b) => b.price - a.price)
        new_collection_details_by_price_sorting={};
        
        if (sex_status && status_price_range){
            priceMap.forEach((pair)=>{
                if(new_collection_details_by_prices_and_sexStatus[pair.id]){
                    new_collection_details_by_price_sorting[pair.id]=new_collection_details_by_prices_and_sexStatus[pair.id];   
                }                 
            }) 
            container_presentation.innerHTML='';
            presentation_by_sorting(new_collection_details_by_price_sorting);
            return
        }


        if (sex_status==="women" || sex_status==="men"){           
            priceMap.forEach((pair)=>{
                if(filtred_collection[pair.id]){
                    new_collection_details_by_price_sorting[pair.id]=filtred_collection[pair.id];   
                }                 
            })          
            container_presentation.innerHTML='';
            presentation_by_sorting(new_collection_details_by_price_sorting);
            return;   
        }

        if(status_price_range){
            priceMap.forEach((pair)=>{
                if(new_collection_details_by_prices[pair.id]){
                    new_collection_details_by_price_sorting[pair.id]=new_collection_details_by_prices[pair.id];   
                }                 
            })          
            container_presentation.innerHTML='';
            presentation_by_sorting(new_collection_details_by_price_sorting);
            return; 
        }

        if(ch_bx_true>0){
            priceMap.forEach((pair)=>{
                if(new_collection_details_by_checkboxes[pair.id]){
                    new_collection_details_by_price_sorting[pair.id]=new_collection_details_by_checkboxes[pair.id];   
                }                 
            })          
            container_presentation.innerHTML='';
            presentation_by_sorting(new_collection_details_by_price_sorting);
            return; 
        }
        
        priceMap.forEach((pair)=>{
            new_collection_details_by_price_sorting[pair.id]=collection_details[pair.id];    
        })
        container_presentation.innerHTML='';
        presentation_by_sorting(new_collection_details_by_price_sorting);
    })
    
    
    // -----------------------------CHECKBOXES-------------------------------------------------------------------------
    const checkboxes_array = document.querySelectorAll('.checkbox-button');
    const checkbox_all = document.querySelector('#sort-0000');

    // event handler for the "check all" checkbox
    checkbox_all.addEventListener('click', () =>{
        console.log("check all")
        if(checkbox_all.checked){
            checkboxes_array.forEach((buttonCheckbox)=>{       
                if(buttonCheckbox.checked===false){
                    buttonCheckbox.checked=true;
                };
            })  
        }
        if(!checkbox_all.checked){
            checkboxes_array.forEach((buttonCheckbox)=>{       
                if(buttonCheckbox.checked===true){
                    buttonCheckbox.checked=false;
                };
            })  
        }

    })
    
    
    // function for compiling an array of Catalog Numbers of all Snickers Items corresponding to the Input Condition of the selected Checkbox
    function checkbox_sex(income_sex){
        filtred_collection=[];

        for (key in collection_details){
            if(income_sex==collection_details[key].sex){  
                container_presentation.innerHTML='';          
                filtred_collection[key]=collection_details[key];
            } 
        }  
    
        let b = presentation_by_sorting(filtred_collection); // array containing all icons of all Snickers Items of the Home page.
        move_to_detailes(b); 
        
        return filtred_collection;    
    }
    
    // the function checks the state of all checkboxes, and if:
    // - none of them is checked, then the function returns the page state to default,
    // - at the same time the checkboxes "man" and "woman" are checked, then the function returns the page state to default,
    
    function checkbox_status(){
        ch_bx_true = 0;
        ch_box_values_list = [];   
        let array_key_styles = [];
        let new_collect = collection_details;
        new_collection_details_by_checkboxes = [];

    
        checkboxes_array.forEach((buttonCheckbox)=>{       
            if(buttonCheckbox.checked===true){
                ch_bx_true +=1;
                ch_box_values_list.push(buttonCheckbox.value) // the function adds the values of checked checkboxes to the array.  
            };       
        }) 

        if(ch_box_values_list.length==0){
            console.log("ch_box_values_list.length: "+ ch_box_values_list.length)

            if (status_price_range && sex_status){
                console.log("ch_box_values_list - 0 && status_price_range +  sex_status")

                container_presentation.innerHTML='';
                presentation_by_sorting(new_collection_details_by_prices_and_sexStatus);
                return
            }

            if (status_price_range){
                console.log("ch_box_values_list - 0 && PriceRange ")

                container_presentation.innerHTML='';
                presentation_by_sorting(new_collection_details_by_prices);
                return
            }

            if (sex_status){
                console.log("ch_box_values_list - 0 && SexStatus ")

                container_presentation.innerHTML='';
                presentation_by_sorting(filtred_collection);
                return
            }
            else {
                console.log("ch_box_values_list - 0 && ELSE ")

                container_presentation.innerHTML='';
                main_page(collection_details)

            }

        }

        // firstly, check if one of conditions is selected ('men'/'women'), and add to new array ("new_collect") all Snickers items to match to this criterion.
        if(ch_box_values_list.length>0){

// if the PriceRange and CheckBox filter is selected, an array with this combination of parameters is formed.
            if (status_price_range){ 
                console.log("status_price_range")
                
                new_collection_details_by_prices_and_chBox = {};
                new_collection_details_by_prices_and_New
                new_collection_details_by_prices_and_chBox_NEW = {};                                

                // 1 - check array Price and compose 2 different array: chBox и New
                for (key in new_collection_details_by_prices){                   
                    ch_box_values_list.forEach((val)=>{
                        //for "Run/Basket/Tennis" checkboxes parameters is true
                        if(new_collection_details_by_prices[key].style==val){
                            new_collection_details_by_prices_and_chBox[key] = new_collection_details_by_prices[key]
                        }
                           //for "Latest" checkbox parameter is true
                        if(new_collection_details_by_prices[key].collection=="New"){
                            new_collection_details_by_prices_and_New[key] = new_collection_details_by_prices[key]
                        }
                    })                    
                }
                
                // 2 - if both checkboxes parameters (Run/Basket/Tennis) and Latest is true -> compose one more array "chBox_NEW"
                for (key in new_collection_details_by_prices_and_chBox){
                    if (new_collection_details_by_prices_and_chBox[key].collection=='New'){
                        new_collection_details_by_prices_and_chBox_NEW[key]=new_collection_details_by_prices_and_chBox[key]
                    }
                }

                if(ch_box_values_list.includes('latest')){
                    console.log("ch_box_values_list.includes.latest")

                    if(Object.keys(new_collection_details_by_prices_and_chBox_NEW).length>0){
                        console.log("prices_and_chBox_NEW")
                        container_presentation.innerHTML='';
                        presentation_by_sorting(new_collection_details_by_prices_and_chBox_NEW);
                        return
                    }; 

                    if (Object.keys(new_collection_details_by_prices_and_New).length > 0) {
                        console.log("prices_and_New")
                        container_presentation.innerHTML='';
                        presentation_by_sorting(new_collection_details_by_prices_and_New);
                     }
                }

                if(sex_status){
                    new_collection_details_by_prices_and_chBox_and_sexStatus = {};
                    for (key in new_collection_details_by_prices_and_chBox){  
                        if(sex_status=="women"){                        
                            if (new_collection_details_by_prices_and_chBox[key].sex==='women') {
                                new_collection_details_by_prices_and_chBox_and_sexStatus[key] = new_collection_details_by_prices_and_chBox[key];
                            }
                        }
                        if(sex_status=="men"){
                            if (new_collection_details_by_prices_and_chBox[key].sex==='men') {
                                new_collection_details_by_prices_and_chBox_and_sexStatus[key] = new_collection_details_by_prices_and_chBox[key];
                            }
                        }
                    } 
                    console.log(new_collection_details_by_prices_and_chBox_and_sexStatus)
                    container_presentation.innerHTML='';
                    presentation_by_sorting(new_collection_details_by_prices_and_chBox_and_sexStatus);

                }
            }
    

//MAIN CONDITION FOR COMPOSING CHECKBOXES ARRAY

            if(ch_box_values_list.includes('running') || ch_box_values_list.includes('basket') || ch_box_values_list.includes('tennis')) {
                for (key in new_collect){
                    let item_style = collection_details[key].style;            
        
                    ch_box_values_list.forEach((val)=>{                    
                        // add in "array_key_styles" the each "style value" if they checked, for passing in "main_page()" function

                        if(val==item_style){
                        array_key_styles.push(key);
                        } 
                    })          
                }
                array_key_styles.forEach((key)=>{            
                    new_collection_details_by_checkboxes[key]=collection_details[key];       
                })
                
                console.log("ch_box_values_list");
                console.log(new_collection_details_by_checkboxes);


                if(!sex_status && !status_price_range){
                    console.log("!sex_status && !status_price_range");
                    container_presentation.innerHTML='';        
                    presentation_by_sorting(new_collection_details_by_checkboxes);
                }

                if(sex_status){
                    console.log("sex_status");
                    if_sexStatus_and_checkBoxes()
                }

       //******************** */
                if (status_price_range && !sex_status){
                    new_collection_details_by_prices_and_chBox = {};
                    new_collection_details_by_prices_and_New
                    new_collection_details_by_prices_and_chBox_NEW = {};  
                    console.log("status_price_range");

                    for (key in new_collection_details_by_prices){                   
                        ch_box_values_list.forEach((val)=>{
                            //for "Run/Basket/Tennis" checkboxes parameters is true
                            if(new_collection_details_by_prices[key].style==val){
                                new_collection_details_by_prices_and_chBox[key] = new_collection_details_by_prices[key]
                            }
                        })                    
                    }
                    console.log(new_collection_details_by_prices_and_New);
                    container_presentation.innerHTML='';
                    presentation_by_sorting(new_collection_details_by_prices_and_chBox);
                }


            }
    
        
            if(ch_box_values_list.includes('latest') && !status_price_range){
                // if one or more of the checkbox styles (running/basket/tennis) is checked 
                if(Object.keys(new_collection_details_by_checkboxes).length>0){
        
                    array_key_styles=[];
                    for (key in new_collection_details_by_checkboxes){
                        let collection_name = new_collection_details_by_checkboxes[key].collection; 
                        if(collection_name=='New')array_key_styles.push(key);               
                    }
        
                    new_collection_details_by_checkboxes={};
                    array_key_styles.forEach((key)=>{            
                        new_collection_details_by_checkboxes[key]=collection_details[key];            
                    })

                    console.log("ch_box_values_list_latest");
                    console.log(new_collection_details_by_checkboxes);

                    container_presentation.innerHTML='';
                    presentation_by_sorting(new_collection_details_by_checkboxes);

                    if(sex_status){
                        if_sexStatus_and_checkBoxes()
                    }
                }
        
                // (in other cases (when male/female gender checkbox is selected) or nothing is selected)
                else {
                    for (key in new_collect){
                        let collection_name = new_collect[key].collection;                
                        if(collection_name=='New')array_key_styles.push(key);      
                    }
                    array_key_styles.forEach((key)=>{            
                        new_collection_details_by_checkboxes[key]=collection_details[key];            
                    })

                    console.log("else");
                    console.log(new_collection_details_by_checkboxes);

                    container_presentation.innerHTML='';
                    presentation_by_sorting(new_collection_details_by_checkboxes);

                    if(sex_status){
                        if_sexStatus_and_checkBoxes()
                    }
                }        
            }


            // +++++++ select from the array of selected and filtered CheckBoxes parameters if SexStatus is also selected ++++++++
            function if_sexStatus_and_checkBoxes(){
                new_collection_details_by_checkboxes_and_sexStatus = {};

                if(sex_status){
                    for (key in new_collection_details_by_checkboxes){  
                        if(sex_status=="women"){  
                            if(new_collection_details_by_checkboxes[key].sex=="women"){
                                new_collection_details_by_checkboxes_and_sexStatus[key] =  new_collection_details_by_checkboxes[key]  
                            }                               
                        }
                        if(sex_status=="men"){
                            if(new_collection_details_by_checkboxes[key].sex=="men"){
                                new_collection_details_by_checkboxes_and_sexStatus[key] =  new_collection_details_by_checkboxes[key]  
                            } 
                        }
                    } 
                    console.log(new_collection_details_by_checkboxes_and_sexStatus)
                    container_presentation.innerHTML='';
                    presentation_by_sorting(new_collection_details_by_checkboxes_and_sexStatus);
                }
            }



        }       
    }
    
    // in an array of all checkbox elements, find the checkbox on which the click was made and call the function with this value.
    checkboxes_array.forEach((buttonCheckbox)=>{    
        buttonCheckbox.addEventListener('click', ()=>{
            checkbox_status();  
        })
    })
    
    
    // function to reset all previously selected Checkboxes
    function disable_all_checkboxes(){
        checkboxes_array.forEach((buttonStatus)=>{
            if(buttonStatus.checked){
                container_presentation.innerHTML='';
                buttonStatus.checked=false;
            }
        })
    }
    
    
    // ------------------------------------------------------------------------------------------------------
    
    
    // a function for processing a JSON variable with a collection of Snickers Items and adding them to the "Dropdown list" (Nav-bar) by cloning the "template"
    function get_catalog_firm_name(busket_collection){
        for (firm in busket_collection){
            const temp = document.getElementsByTagName("template")[1];
            const clone = temp.content.cloneNode(true);
            const nextLi = clone.querySelector(".firm-name");
            console.log("firm: " + firm);
            nextLi.innerText=firm;        
            ul_List.appendChild(clone);
        }    
    } 
    get_catalog_firm_name(busket_collection);
    

    men_list.addEventListener('click', ()=>{
        sex_status= "men";
        filtred_collection=[];              

        if(!underline_men.style.backgroundColor){
            underline_men.style.backgroundColor="#fc701c"
        }
        if(underline_women.style.backgroundColor){
            underline_women.style.backgroundColor=null;
        }
        if(underline_home.style.backgroundColor){
            underline_home.style.backgroundColor=null;
        } 


        for (key in collection_details){
            if(collection_details[key].sex==='men') filtred_collection[key]=collection_details[key];            
        }

        if(ch_box_values_list.length==0 && status_price_range){
            console.log("new_collection_details_by_prices");
            console.log(new_collection_details_by_prices);

            console.log(new_collection_details_by_prices_and_sexStatus);
            new_collection_details_by_prices_and_sexStatus = {};

            for (key in new_collection_details_by_prices){  
                if (new_collection_details_by_prices[key].sex==='men') {
                    new_collection_details_by_prices_and_sexStatus[key] = new_collection_details_by_prices[key];
                }
            } 
            console.log("ch_box & price_range");
            console.log(new_collection_details_by_prices_and_sexStatus);
            container_presentation.innerHTML='';
            presentation_by_sorting(new_collection_details_by_prices_and_sexStatus);  
        }


        if(ch_box_values_list.length==0 && !status_price_range){
            console.log("checkbox_sex()");
            container_presentation.innerHTML='';
            checkbox_sex('men');
        }


        if (ch_box_values_list.length>0 && sex_status){
            new_collection_details_by_checkboxes_and_sexStatus = {}
            
            for (key in new_collection_details_by_checkboxes){  
                if (new_collection_details_by_checkboxes[key].sex==='men') {
                    new_collection_details_by_checkboxes_and_sexStatus[key] = new_collection_details_by_checkboxes[key];
                }
            } 
            console.log(new_collection_details_by_checkboxes_and_sexStatus);
            container_presentation.innerHTML='';
            presentation_by_sorting(new_collection_details_by_checkboxes_and_sexStatus);   
        }


        if(ch_box_values_list.length>0 && status_price_range){
            new_collection_details_by_prices_and_chBox_and_sexStatus = {};

            console.log("new_collection_details_by_prices_and_chBox");
            console.log(new_collection_details_by_prices_and_chBox);

            for (key in new_collection_details_by_prices_and_chBox){  
                if (new_collection_details_by_prices_and_chBox[key].sex==='men') {
                    new_collection_details_by_prices_and_chBox_and_sexStatus[key] = new_collection_details_by_prices_and_chBox[key];
                }
            } 
            console.log("ch_box_values_list && status_price_range");
            console.log(new_collection_details_by_prices_and_chBox_and_sexStatus);
            container_presentation.innerHTML='';
            presentation_by_sorting(new_collection_details_by_prices_and_chBox_and_sexStatus);             
        }
    })
    


    women_list.addEventListener('click', ()=>{       
        sex_status="women";
        filtred_collection=[];
        

        if(!underline_women.style.backgroundColor){
            underline_women.style.backgroundColor="#fc701c"
        }
        if(underline_men.style.backgroundColor){
            underline_men.style.backgroundColor=null;
        }
        if(underline_home.style.backgroundColor){
            underline_home.style.backgroundColor=null;
        } 

        for (key in collection_details){
            if(collection_details[key].sex==='women') filtred_collection[key]=collection_details[key];            
        }        

        if(ch_box_values_list.length==0 && status_price_range){

            console.log(new_collection_details_by_prices_and_sexStatus);
            new_collection_details_by_prices_and_sexStatus = {};

            for (key in new_collection_details_by_prices){  
                if (new_collection_details_by_prices[key].sex==='women') {
                    new_collection_details_by_prices_and_sexStatus[key] = new_collection_details_by_prices[key];
                }
            } 
            console.log("ch_box & price_range");
            console.log(new_collection_details_by_prices_and_sexStatus);
            container_presentation.innerHTML='';
            presentation_by_sorting(new_collection_details_by_prices_and_sexStatus);  
        }


        if(ch_box_values_list.length==0 && !status_price_range){
            console.log("only ch_box");
            container_presentation.innerHTML='';
            checkbox_sex('women');
        }


        if (ch_box_values_list.length>0 && sex_status){
            new_collection_details_by_checkboxes_and_sexStatus = {}
            
            for (key in new_collection_details_by_checkboxes){  
                if (new_collection_details_by_checkboxes[key].sex==='women') {
                    new_collection_details_by_checkboxes_and_sexStatus[key] = new_collection_details_by_checkboxes[key];
                }
            } 
            console.log(new_collection_details_by_checkboxes_and_sexStatus);
            container_presentation.innerHTML='';
            presentation_by_sorting(new_collection_details_by_checkboxes_and_sexStatus);   
        }


        if(ch_box_values_list.length>0 && status_price_range){      
            new_collection_details_by_prices_and_chBox_and_sexStatus = {};

            console.log(new_collection_details_by_prices_and_chBox);

            for (key in new_collection_details_by_prices_and_chBox){  
                if (new_collection_details_by_prices_and_chBox[key].sex==='women') {
                    new_collection_details_by_prices_and_chBox_and_sexStatus[key] = new_collection_details_by_prices_and_chBox[key];
                }
            } 
            console.log("ch_box_values_list && status_price_range");
            console.log(new_collection_details_by_prices_and_chBox_and_sexStatus);
            container_presentation.innerHTML='';
            presentation_by_sorting(new_collection_details_by_prices_and_chBox_and_sexStatus);             
        }
    })


    // list of names of Snickers Items - when "clicking" on one of them, we get the "Catalog number" of the corresponding position, which we pass to the called function.
    products.addEventListener('click', ()=>{
        if(underline_home.style.backgroundColor){
            underline_home.style.backgroundColor=null;
        }      
        if(underline_women.style.backgroundColor){
            underline_women.style.backgroundColor=null;
        }
        if(underline_men.style.backgroundColor){
            underline_men.style.backgroundColor=null;
        }

        list_parent.classList.toggle("hidden"); // expand the list
    
        ul_List.addEventListener('mouseover', ()=>{
            if(typeof json_catalog_number==="string"){
                set_inside_image(json_catalog_number);
                set_image(json_catalog_number);
                set_details(json_catalog_number);
            }    
        })
    
        ul_List.addEventListener('click', (e)=>{
            let key_name=e.target.closest('.firm-name').textContent;
            json_catalog_number = busket_collection[key_name];

            if(list_parent.className=="list-parent"){
                console.log(list_parent.className);
                list_parent.classList.toggle("hidden");
            }
            
            container_presentation.innerHTML='';           
            let new_collection_details = {};
            for (key in collection_details){
                if (collection_details[key].firm===key_name){                    
                    new_collection_details[key]=collection_details[key];
                }                            
            }  
            main_page(new_collection_details);      
        })
    })
    
    
    //  display all the details (model-description-price new-discount-price old) for the selected Item
    function set_details(json_catalog_number){
        document.querySelector('.header').innerText = collection_details[json_catalog_number].model;
        document.querySelector('.description-company').innerText = collection_details[json_catalog_number].description;
        document.querySelector('.price').innerText = collection_details[json_catalog_number].new_price;
        str_price = document.querySelector('.price').innerText;
        price = str_price.replace((/[^\d+\.\d+]/g), '');
        price_numb = Number(price);
        document.querySelector('.discount').innerText = collection_details[json_catalog_number].discount;
        document.querySelector('.old-price').innerText = collection_details[json_catalog_number].old_price;
    }
    
    // set the image on the "Scrollbar", corresponding to the passed "Catalog number"
    function set_image(json_catalog_number){
        thumb_Nail.forEach((nail)=>{
            nail.getAttributeNode("src").nodeValue = `images/${json_catalog_number}-image-product-${ser_numb}-thumbnail.jpg`        
            ser_numb++ 
        }) 
        ser_numb=1;   
    }
    // set the picture opened by "Close-up", corresponding to the passed "Catalog number"
    function set_inside_image(json_catalog_number){
        main_image.getAttributeNode("src").nodeValue = `images/${json_catalog_number}-image-product-1.jpg`
        inside_image.getAttributeNode("src").nodeValue = `images/${json_catalog_number}-image-product-1.jpg`    
    }
    
    set_inside_image(json_catalog_number);
    set_image(json_catalog_number);
    
    
    
    thumb_Nail.forEach((nail)=>{
        nail.addEventListener('click', ()=>{
            let str = nail.id;
            let id = str.replace((/.*[^\d]/g), ''); // extract Catalog number from ID
            // let catalog_number = str.replace((/-\w+-\d$/g), '');
            console.log("id: " + id)
            // console.log("catalog_number: " + catalog_number)
    
            let b = `images/${json_catalog_number}-image-product-${id}.jpg`; // create a variable in which we specify the name-source for the "Main picture" with the required Catalog number
            console.log(b);
            main_image.getAttributeNode("src").nodeValue = b; // replace in the DOM document, change the resource to to the name with the actual "Main picture"
            inside_image.getAttributeNode("src").nodeValue = b;
    
            let old_image_selected = document.querySelector('.img-preview.selected');
            old_image_selected.classList.remove("selected");
            nail.classList.add("selected");
        })
    })
    
    math_button.addEventListener('click', (e)=>{
        if (e.target.id ==="button-minus" || e.target.id ==="image-minus"){        
            count--; 
            if (count<1) count=1;     
        };
        if (e.target.id ==="button-plus" || e.target.id ==="image-plus") {
            count++; 
        }
        result.textContent=count;
    })
    
    
    add_to_cart.addEventListener('click', () => {      
        // save the parameters of the added product in the "Cart" in the variable "new_item"
        new_item = {
            cat_number: json_catalog_number,
            item_name: collection_details[json_catalog_number].model,
            item_count: count,
            item_price: price_numb,
            sum: (price_numb * count),
        } 
    
        id_item_collect_cart = generateUUID() // set an ID for each item in the "Cart";
    
        collect_cart[id_item_collect_cart]=new_item; // save in the Array Object, each Snickers Item from the "Cart" with the same ID of each element;
    
        item_formula(id_item_collect_cart); // call a function to calculate the Amount for each Item depending on the quantity and clone the corresponding line from the Template.
        icon_item_number_cart(); // each time after clicking "Add to cart" the length of the array with the list of elements "Number of items in the Cart" is updated and the actual number is displayed on the icon in the Navigation Bar.
    })
    
    // update the length of the array with the list of elements "Number of items in the Cart" and update the number on the icon in the Navigation bar.
    function icon_item_number_cart(){
        count_items_in_cart = document.querySelectorAll('.delete-icon');
        document.querySelector(".number").textContent = count_items_in_cart.length; 
        
        console.log("count_items_in_cart: " + count_items_in_cart.length);
        // if the array length = 0, then we display the inscription "Your cart is empty" on the screen and hide the "Checkout" button.
        if(count_items_in_cart.length===0){        
            empty_cart.classList.toggle("hidden");
            cart_description.classList.toggle("hidden"); 
            counter.style.display="none";    
        }
    }
    
    
    // function for calculating the cost of the "Added items" and displaying it in the "Cart"
    function item_formula(id_item){    
          
        const cart_description = document.querySelector('#cart-description');
        const status_cart_description = cart_description.className;
        clone_node_to_basket(id_item);
        
        if (count>0 && status_cart_description==="cart-description hidden"){
            empty_cart.classList.toggle("hidden");
            cart_description.classList.toggle("hidden");
            counter.style.display="flex";        
        }
        if(count===0){
            empty_cart.classList.toggle("hidden");
            cart_description.classList.toggle("hidden"); 
            counter.style.display="none";    
        }
    }
    
    
    function clone_node_to_basket(id_item){  
        const temp = document.getElementsByTagName("template")[0]; // create a variable with the selector of the appropriate template-Template. 
        const clone = temp.content.cloneNode(true); // clones the entire Template structure
        // 1st element - String (Price-Quantity-Value)
        const formula = clone.querySelector('.detail-price');  // 1st of template elements-Template (Price-Quantity-Value)
        let total_sum = price_numb * count; let total_sum_fixed = total_sum.toFixed(2); // Calculation of the "Value" to be added to the 1st element
        formula.innerHTML = `<p class="detail-price">$${price} x ${count} <strong> $${total_sum_fixed}</strong></p>` // assign the found element of the Template the required value    
        // 2nd element - Picture
        const item_image_basket = clone.querySelector('.item-image');
        item_image_basket.getAttributeNode("src").nodeValue = `images/${json_catalog_number}-image-product-1-thumbnail.jpg`
        // 3rd item - ID item
        const container_id = clone.querySelector('.cart-containt-full');
        container_id.getAttributeNode("id").nodeValue = id_item;
    
        basket_item_list.appendChild(clone); // add to the existing structure, the updated "Clone" of the template. (The parent node in the Recycle Bin to which we will attach the Clone)
    }
    
    // Event Handler (Listen to Cart Button)
    basket.addEventListener('click', ()=>{  
        cart_parent.classList.toggle("hidden");
    
        // if in the Modal window "Cart", the child window is "hidden", then expand it.
        if(popup_parent.className == "popup_parent hidden"){
            popup_parent.classList.toggle("hidden")
        }
        count_items_in_cart = document.querySelectorAll('.delete-icon'); // each time after clicking the "Delete" icon, the array variable with the list of "Cart" elements is updated.
        delete_from_basket()
        total_sum_all_items() // calculate the value of all positions in the "Cart"
    })
    
    // hide the "Cart" Modal window if the "click" occurred outside of the modal window.
    cart_parent.addEventListener('click', (e)=>{
        const click = e.composedPath().includes(popup_parent);
        const click_shipping = e.composedPath().includes(checkout_form);
        console.log(e.target)
        if (!click && !click_shipping){
            cart_parent.classList.toggle("hidden");
        } 
        
    })
    
    // hide the "Products List" Modal window if the "click" happened outside of the modal window.
    list_parent.addEventListener('click', (e)=>{
        const click = e.composedPath().includes(list_items);
        if (!click) {
            console.log(list_parent.className);
            list_parent.classList.toggle("hidden");            
        }
    
    })


    const background_item_image = document.querySelector('.front-main-image');
    background_item_image.addEventListener('click', (e)=>{
        const frame_inside_image = document.querySelector('.inside-main-image');

        const click_frame_inside = e.composedPath().includes(frame_inside_image);
        const click_arrow_previous = e.composedPath().includes(arrow_previous);
        const click_arrow_next = e.composedPath().includes(arrow_next);
        if (!click_frame_inside) {
            if(click_arrow_previous || click_arrow_next) return;     
            background_item_image.style.display ="none";
        }
    })

    
    // function - event handler (listen to "Delete" button)
    function delete_from_basket(){    
        basket_item_list.addEventListener('click', (e)=>{
            if(e.target.className !="basket-icon-delete") return;
            const id_item_deleted = e.target.closest('.cart-containt-full').getAttributeNode("id").nodeValue;
            e.target.closest('.cart-containt-full').remove(); // удаляем из DOM
    
            icon_item_number_cart() // each time after clicking "Add to cart" the length of the array with the list of elements "Number of items in the Cart" is updated and the actual number is displayed on the icon in the Navigation Bar.      
            
            // iterate through all the elements in the Object variable and remove by key the value that corresponds to the one removed from the DOM
            for(key in collect_cart){             
                if(key==id_item_deleted){
                    delete collect_cart[key];                
                }
            }
            total_sum_all_items() // calculate the value of all positions in the "Cart"
        })   
    }
    
    main_image.addEventListener('click', ()=>{
        document.querySelector('.front-main-image').style.display ="flex";
    })
    
    icon_close.addEventListener('click', ()=>{
        document.querySelector('.front-main-image').style.display ="none";
    })
    
    arrow_next.addEventListener('click', ()=>{
        ser_numb++;
        if(ser_numb>4) ser_numb=1;
        let b = `images/${json_catalog_number}-image-product-${ser_numb}.jpg`;
        inside_image.getAttributeNode("src").nodeValue = b;
    })
    
    arrow_previous.addEventListener('click', ()=>{
        ser_numb--;
        if(ser_numb<1) ser_numb=4;
        let b = `images/${json_catalog_number}-image-product-${ser_numb}.jpg`;
        inside_image.getAttributeNode("src").nodeValue = b;
    })
    
    
    // function to generate UUID
    function generateUUID() {
        // Get the current time in milliseconds
        let d = new Date().getTime();
        // If performance is available, then add its value to the time
        if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
            d += performance.now();
        }
        // Generate a UUID in the format 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
      }
    
      function total_sum_all_items(){
        total_sum_cart = 0;
        for (key in collect_cart){      
            total_sum_cart = total_sum_cart + collect_cart[key].sum;           
        }
        let string_total_sum_cart = total_sum_cart.toFixed(2);
        let dom_elem_total_sum = document.querySelector('.strong-total-sum')
        dom_elem_total_sum.innerText=`$${string_total_sum_cart}`;
      }
    
      const checkout_form = document.querySelector('.checkout-form');
      checkout_button.addEventListener('click', ()=>{
        checkout_form.classList.toggle("hidden");
        popup_parent.classList.toggle("hidden");
      })
    
    
    //   HOME PAGE
    
    var slick_container = document.querySelectorAll(".slick-slide");
    
    // +++ a function that listens to all elements of the Icons of all Commodity Items, and in case of clicking on one of them, opens the details of the selected item.
    function move_to_detailes(slick_container){
        slick_container.forEach((slick)=>{
            slick.addEventListener('click',(e)=>{
                const tag_item_number = e.target.closest('.slick-slide').id;
                json_catalog_number = tag_item_number;
                set_inside_image(tag_item_number);
                set_image(tag_item_number);
                set_details(tag_item_number);
                main.classList.toggle("hidden");
                home.classList.toggle("hidden");
                left_side_bar.style.display="none";
                left_side_bar.classList.toggle("hidden"); 
            })               
        })
    }
    move_to_detailes(slick_container);
    
    
    start_home.addEventListener('click', ()=>{
        sex_status = "";
        console.log("start-home: " + sex_status);
        container_presentation.innerHTML='';
        disable_all_checkboxes();  //******************************************************************************
        let b = main_page(collection_details);
        console.log(b);

        priceInput[0].value = 50;
        priceInput[1].value = 500;
        rangeInput[0].value = 50;
        range.style.left = 10 + "%";
        rangeInput[1].value = 500;
        range.style.right = 50 + "%";

    
        if (main.className=="main") {
            main.classList.toggle("hidden");
            home.classList.toggle("hidden"); 
            container_presentation.innerHTML='';
        
            let b = main_page(collection_details);
            move_to_detailes(b);
        }

        if(underline_women.style.backgroundColor){
            underline_women.style.backgroundColor=null;
        }
        if(underline_men.style.backgroundColor){
            underline_men.style.backgroundColor=null;
        }


    })
    
    //   NAVIGATION BUTTONS for "CHECKOUT" (inside "Cart")
    
    back_arrow_shipping.addEventListener('click', ()=>{
        checkout_form.classList.toggle("hidden"); // hide stage 2 (Shipping)
        popup_parent.classList.toggle("hidden"); // display stage 1 (nested pop-up window) Checkout
    })
    
    close_checkout_form.addEventListener('click', ()=>{
        popup_parent.classList.toggle("hidden"); // display stage 1 Сheckout for next displaying
        cart_parent.classList.toggle("hidden"); // hide modal window background
    })
    
    close_shipping_form.addEventListener('click', ()=>{
        checkout_form.classList.toggle("hidden"); // hide stage 2 (Shipping)
        popup_parent.classList.toggle("hidden"); // display stage 1 Checkout for the next opening
        cart_parent.classList.toggle("hidden"); // hide modal window background
    })
            
    home.addEventListener('click', (e)=>{
        const header_arrow_dropdown = e.target.closest('.image-arrow-dropdown');
        const header_div = header_arrow_dropdown.parentNode;
        const grandParent = header_div.parentNode;
        const sibling_slide_container = grandParent.nextElementSibling;
        if (getComputedStyle(sibling_slide_container).display=='flex'){
            sibling_slide_container.style.display="none";
            e.target.getAttributeNode("src").nodeValue = "images/image-arrow-dropup.png";
        }
        else {
            sibling_slide_container.style.display="flex";
            e.target.getAttributeNode("src").nodeValue = "images/image-arrow-dropdown.png";
        }
    })


    // Operations with "Collections" nav-bar sections.
    const collections = document.querySelector('#collections');
    const collection_list = document.querySelector('.collection-list');
    const collection_list_items = document.querySelector('.collection-list-items');

    collections.addEventListener('click',()=>{ 
        if(underline_home.style.backgroundColor){
            underline_home.style.backgroundColor=null;
        }      
        if(underline_women.style.backgroundColor){
            underline_women.style.backgroundColor=null;
        }
        if(underline_men.style.backgroundColor){
            underline_men.style.backgroundColor=null;
        }

        let list_name_collection =[]
        for (tag in collection_details){
            let next_name_collection = collection_details[tag].collection;
            list_name_collection.push(next_name_collection)            
        }
        console.log(list_name_collection);
        collection_list.classList.toggle("hidden");
    })   

    // hide the "Collections" Modal window if the "click" occurred outside of the modal window.
    collection_list.addEventListener('click', (e)=>{
        const click = e.composedPath().includes(collection_list_items);
        if (!click){
            collection_list.classList.toggle("hidden");
        }                 
        else{
            let collection_called=e.target.closest('.collection-name').textContent;
            collection_button(collection_called)
        }

    })
   
    function collection_button(collection_called){
        let new_collection_details = {};
        for (key in collection_details){
            if(collection_details[key].collection==collection_called)
                new_collection_details[key]=collection_details[key]
        }
        collection_list.classList.toggle("hidden");
        container_presentation.innerHTML='';
        presentation_by_sorting(new_collection_details); 
    }


    //  ************  PRICE-RANGE-FILTER   *********************
    const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
    let priceGap = 50;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});

    button_price_filter.addEventListener('click', ()=>{
        status_price_range = true;
        valueInputMin = rangeInput[0].value;
        valueInputMax = rangeInput[1].value;
        price_range(valueInputMin, valueInputMax)
    })


    function price_range(priceMin, priceMax){
        let item_price;
        new_collection_details_by_prices={};
        new_collection_details_by_prices_and_sexStatus = {};        
        new_collection_details_by_prices_and_chBox = {};

        // first of all we compose arry by Price Range parameters
        for (key in collection_details){
            item_price = collection_details[key].new_price
            if (item_price > priceMin && item_price < priceMax) {
                new_collection_details_by_prices[key]=collection_details[key];
            }
        }    
        console.log(new_collection_details_by_prices);


        if (sex_status=="men" && status_price_range && ch_box_values_list.length==0){
            for (key in new_collection_details_by_prices){  
                if (new_collection_details_by_prices[key].sex==='men') {
                    new_collection_details_by_prices_and_sexStatus[key] = new_collection_details_by_prices[key];
                }
            } 
            console.log(new_collection_details_by_prices_and_sexStatus)
            container_presentation.innerHTML='';
            presentation_by_sorting(new_collection_details_by_prices_and_sexStatus);  
        }

        if (sex_status=="women" && status_price_range && ch_box_values_list.length==0){
            for (key in new_collection_details_by_prices){  
                if (new_collection_details_by_prices[key].sex==='women') {
                    new_collection_details_by_prices_and_sexStatus[key] = new_collection_details_by_prices[key];
                }
            } 
            console.log(new_collection_details_by_prices_and_sexStatus);
            container_presentation.innerHTML='';
            presentation_by_sorting(new_collection_details_by_prices_and_sexStatus);  
        }

        if (sex_status && ch_box_values_list.length==0){
            for (key in filtred_collection){              
                item_price = filtred_collection[key].new_price
                if (item_price > priceMin && item_price < priceMax) {
                    new_collection_details_by_prices_and_sexStatus[key]=filtred_collection[key];
                }
            } 
            console.log(new_collection_details_by_prices_and_sexStatus);
            container_presentation.innerHTML='';
            presentation_by_sorting(new_collection_details_by_prices_and_sexStatus); 
        }  



        //**************************** */

        if (sex_status && ch_box_values_list.length>0){
            new_collection_details_by_prices_and_chBox_and_sexStatus = {};

            console.log(new_collection_details_by_checkboxes_and_sexStatus);

            for (key in new_collection_details_by_checkboxes_and_sexStatus){              
                item_price = new_collection_details_by_checkboxes_and_sexStatus[key].new_price
                if (item_price > priceMin && item_price < priceMax) {
                    new_collection_details_by_prices_and_chBox_and_sexStatus[key]=new_collection_details_by_checkboxes_and_sexStatus[key];
                }
            } 
            console.log(new_collection_details_by_prices_and_chBox_and_sexStatus);
            container_presentation.innerHTML='';
            presentation_by_sorting(new_collection_details_by_prices_and_chBox_and_sexStatus); 
        }






        if(!sex_status && ch_box_values_list.length>0){ 
            console.log("price_Range and ch_box") 
            console.log()     
           

            for (key in new_collection_details_by_checkboxes){
                item_price = new_collection_details_by_checkboxes[key].new_price
                if (item_price > priceMin && item_price < priceMax) {
                    new_collection_details_by_prices_and_chBox[key]=new_collection_details_by_checkboxes[key];
                }
            } 
            container_presentation.innerHTML='';
            presentation_by_sorting(new_collection_details_by_prices_and_chBox); 
        }

     

        if(sex_status===undefined && ch_box_values_list.length==0){
            console.log("sex_status: " + sex_status);
            for (key in collection_details){
                item_price = collection_details[key].new_price
                if (item_price > priceMin && item_price < priceMax) {
                    new_collection_details_by_prices[key]=collection_details[key];
                }
            }     
            container_presentation.innerHTML='';
            presentation_by_sorting(new_collection_details_by_prices); 
        }
    }
}


generateData()

