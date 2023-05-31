/**
 * the goal of this work is to implement a fully deep search function
 * in the main idea, we wanna from any distincts entry make search and return an understanding 
 * response to the customer
 * 
 * Thus, let's start
 * 
 * JS Vanilla a non type language but to purchare our job we need to 
 * enumerated major type of entries that we'll catch
 * 
 * major entries are:
 * - Array
 * - Object
 * - String
 * - Number
 * - Boolean
 * 
 * As not the third last items are not mixable but the to first can contain
 * any of rhe previous entry types
 * 
 * We can now proceed to the design !!
 * 
 * The main logic way to make if is to go recursively
 */
 
/**
 * @method deepSearchJS
 * @param {Array|Object|String|Number|Boolean} srcData - the entry source data in which we make research
 * @param {Array|Object|String|Number|Boolean} pattern - the item find in the data source
 */
function deepSearchJS(srcData,pattern) 
{
   //  make sure that the source data is defined and not null
    if (
        (typeof srcData === "undefined") || 
        (typeof srcData === "object" && srcData === null)
        )
    {
        return {
            status: false,
            msg: "can't proceed any research on undefined data",
           pattern: pattern,
           items: srcData
        }
    }
   //  make sure that we rationaly proceed the reseach by checking the type order priority
    if (
           ["number","bigint","boolean"].includes(typeof srcData) && 
           (
           pattern instanceof Array ||
           pattern instanceof Object ||
           pattern instanceof Date
           )
       )
   {
        return {
            status: false,
            msg: "can't proceed any research objects inside number, boolean or bigint",
           pattern: pattern,
           items: srcData
        }
   }
   
   // if pattern is include in number, string, bigint, boolean then
   if (["number","bigint","boolean"].includes(typeof pattern))
   {
       if (["number","bigint","boolean","string"].includes(typeof srcData) )
       {
           // convert the two entities to string compare the inclusion
           return srcData.toString().includes(pattern.toString())?
               {
                   status: true,
                   pattern: pattern,
                   items: srcData
               }
               :
               {
                   status: false,
                   msg: "not found",
                   pattern: pattern,
                   items: srcData
               }
           
       }
       // now try catch object action
   
       if (srcData instanceof Array)
       {
           let data = srcData.map(el=>deepSearchJS(el,pattern))
           let status = false
           data.forEach(el=>el.status?status = true:null)
           return status?
                   {
                       status: true,
                       pattern: pattern,
                       items: data.filter(el=>el.status),
                       log: data
                   }
                   :
                   {
                       status: false,
                       msg: "not found",
                       pattern: pattern,
                       items: srcData
                   }
           
       }
       
       if (srcData instanceof Object)
       {
           let data = Object.keys(srcData).map(el=>deepSearchJS(srcData[el],pattern))
           let status = false
           data.forEach(el=>el.status?status = true:null)
           return status?
                   {
                       status: true,
                       pattern: pattern,
                       items: data.filter(el=>el.status),
                       log: data
                   }
                   :
                   {
                       status: false,
                       msg: "not found",
                       pattern: pattern,
                       items: srcData
                   }
           
       }
   }

   else if (["string"].includes(typeof pattern)) // string in string
   {
       if (["string"].includes(typeof srcData) || srcData instanceof Date)
       {
           return srcData.toString().includes(pattern)?
                   {
                       status: true,
                       pattern: pattern,
                       items: srcData
                   }
                   :
                   {
                       status: false,
                       msg: "not found",
                       pattern: pattern,
                       items: srcData
                   }
       }

       if (["number","bigint","boolean"].includes(typeof srcData))
        {
           // convert the two entities to string compare the inclusion
           return srcData.toString().includes(pattern.toString())?
               {
                   status: true,
                   pattern: pattern,
                   items: srcData
               }
               :
               {
                   status: false,
                   msg: "not found",
                   pattern: pattern,
                   items: srcData
               }
           
       }
       
       if (srcData instanceof Array)
       {
           let data = srcData.map(el=>deepSearchJS(el,pattern))
           let status = false
           data.forEach(el=>el.status?status = true:null)
           return status?
                   {
                       status: true,
                       pattern: pattern,
                       items: data.filter(el=>el.status),
                       log: data
                   }
                   :
                   {
                       status: false,
                       msg: "not found",
                       pattern: pattern,
                       items: srcData
                   }
           
       }
       
        if (srcData instanceof Object)
       {
           let data = Object.keys(srcData).map(el=>deepSearchJS(srcData[el],pattern))
           let status = false
           data.forEach(el=>el.status?status = true:null)
           return status?
                   {
                       status: true,
                       pattern: pattern,
                       items: data.filter(el=>el.status),
                       log: data
                   }
                   :
                   {
                       status: false,
                       msg: "not found",
                       pattern: pattern,
                       items: srcData
                   }
           
       }
   }
   else if (pattern instanceof Array || pattern instanceof Object)
   {   
       if (["string"].includes(typeof srcData))
       {
           return JSON.stringify(srcData).includes(JSON.stringify(pattern))?
               {
                   status: true,
                   pattern: pattern,
                   items: srcData,
                   log: srcData
               }
               :
               {
                   status: false,
                   msg: "not found",
                   pattern: pattern,
                   items: srcData
               }
       }
       else if (srcData instanceof Array)
       {
           if(JSON.stringify(srcData).includes(JSON.stringify(pattern)))
           {
               return {
                       status: true,
                       pattern: pattern,
                       items: srcData,
                       log: srcData
                   }
           }
           let data = srcData.map(el=>deepSearchJS(el,pattern))
           let status = false
           data.forEach(el=>el.status?status = true:null)
           return status?
                   {
                       status: true,
                       pattern: pattern,
                       items: data.filter(el=>el.status),
                       log: data
                   }
                   :
                   {
                       status: false,
                       msg: "not found",
                       pattern: pattern,
                       items: srcData
                   }
           
       }
       else if (srcData instanceof Object)
       {
           if(JSON.stringify(srcData).includes(JSON.stringify(pattern)))
           {
               return {
                       status: true,
                       pattern: pattern,
                       items: srcData,
                       log: srcData
                   }
           }
           let data = Object.keys(srcData).map(el=>deepSearchJS(srcData[el],pattern))
           let status = false
           data.forEach(el=>el.status?status = true:null)
           return status?
                   {
                       status: true,
                       pattern: pattern,
                       items: data.filter(el=>el.status),
                       log: data
                   }
                   :
                   {
                       status: false,
                       msg: "not found",
                       pattern: pattern,
                       items: srcData
                   }
           
       }
       
   }
   
   
}

export default deepSearchJS;